#!/usr/bin/env node
/**
 * Chặn màu hex hardcode ngoài token của Design System.
 *
 * VÌ SAO KHÔNG DÙNG ESLint RULE: eslint `no-restricted-syntax` không so khớp được nội dung
 * string literal bằng regex, còn stylelint chỉ soi .css chứ không soi 1.747 inline style
 * trong .tsx. Script này soi cả hai.
 *
 * CƠ CHẾ BASELINE: repo đang có sẵn 361 lượt hex trong .tsx. Chặn cứng ngay thì lint đỏ
 * toàn bộ và không ai dùng. Nên: đếm hex theo từng file, so với baseline; file nào TĂNG
 * thì fail. Migrate xong một file thì chạy --update để hạ baseline — số chỉ đi xuống,
 * không bao giờ đi lên.
 *
 * Dùng:
 *   node scripts/check-ds-tokens.mjs            # kiểm (dùng trong npm run lint:ds)
 *   node scripts/check-ds-tokens.mjs --update   # hạ baseline sau khi migrate
 *   node scripts/check-ds-tokens.mjs --report   # xem file nào còn nhiều nhất
 */
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const SRC = 'src';
const BASELINE_FILE = 'scripts/ds-tokens-baseline.json';

// Hex 3/4/6/8 chữ số. \b ở cuối để #155EEF00 không bị đếm hai lần.
const HEX = /#(?:[0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\b/g;

/** File được miễn — đây LÀ nơi định nghĩa token, hex ở đây là đúng. */
const EXEMPT = [
  join('src', 'styles', 'ds'),         // mirror byte-identical của design-system/tokens
  join('src', 'styles', 'fonts.css'),  // sinh tự động, không có màu
  // Màu phân loại: DS không có thang qualitative, nên BA_Home khai ở ĐÚNG MỘT chỗ.
  // Miễn ở đây để guard vẫn có nghĩa với toàn bộ phần còn lại của app.
  join('src', 'styles', 'categorical.ts'),
];

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (/\.(tsx?|css)$/.test(p) && !/\.d\.ts$/.test(p)) out.push(p);
  }
  return out;
}

function countHex(file) {
  // Bỏ comment để hex trong ghi chú giải thích không bị tính là vi phạm.
  const text = readFileSync(file, 'utf8')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/^\s*\/\/.*$/gm, '');
  return (text.match(HEX) ?? []).length;
}

const files = walk(SRC).filter((f) => !EXEMPT.some((e) => f.startsWith(e)));
const counts = {};
for (const f of files) {
  const n = countHex(f);
  if (n > 0) counts[relative(SRC, f).split(sep).join('/')] = n;
}
const total = Object.values(counts).reduce((a, b) => a + b, 0);

const mode = process.argv[2];

if (mode === '--report') {
  const rows = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  console.log(`Hex hardcode còn lại: ${total} lượt trong ${rows.length} file\n`);
  for (const [f, n] of rows) console.log(String(n).padStart(5), f);
  process.exit(0);
}

if (mode === '--update') {
  writeFileSync(BASELINE_FILE, JSON.stringify({ total, counts }, null, 2) + '\n');
  console.log(`Baseline cập nhật: ${total} lượt hex trong ${Object.keys(counts).length} file`);
  process.exit(0);
}

if (!existsSync(BASELINE_FILE)) {
  console.error(`Chưa có baseline. Chạy: node ${process.argv[1]} --update`);
  process.exit(1);
}

const baseline = JSON.parse(readFileSync(BASELINE_FILE, 'utf8'));
const problems = [];

for (const [file, n] of Object.entries(counts)) {
  const allowed = baseline.counts[file] ?? 0;
  if (n > allowed) problems.push({ file, n, allowed });
}

if (problems.length > 0) {
  console.error('LỖI — thêm màu hex hardcode. Dùng token DS (var(--ds-*) / var(--app-*)) thay vì hex.');
  console.error('Tra token: design-system/tokens/palette.css + semantic.css\n');
  for (const p of problems) {
    console.error(`  ${p.file}: ${p.n} hex (baseline cho phép ${p.allowed})`);
  }
  console.error('\nNếu bạn vừa MIGRATE file và số hex GIẢM, chạy: npm run lint:ds:update');
  process.exit(1);
}

const improved = baseline.total - total;
console.log(
  `OK — ${total} lượt hex (baseline ${baseline.total})` +
    (improved > 0 ? ` — giảm ${improved}, chạy npm run lint:ds:update để chốt` : ''),
);
