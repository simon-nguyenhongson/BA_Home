const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

try {
  // run tsc and capture output
  execSync('npx tsc -b', { cwd: path.join(__dirname, 'frontend') });
} catch (err) {
  const output = err.stdout.toString();
  const lines = output.split('\n');
  const fileRegex = /^src\/(.+?)\((\d+),(\d+)\): error TS(\d+): '(.*)' is declared but (never used|its value is never read)./;
  
  lines.forEach(line => {
    const match = line.match(fileRegex);
    if (match) {
      const file = path.join(__dirname, 'frontend', 'src', match[1]);
      const varName = match[5];
      let content = fs.readFileSync(file, 'utf-8');
      
      // Specifically for 'React'
      if (varName === 'React') {
        content = content.replace(/import\s+React\s*,\s*\{\s*/g, 'import { ');
        content = content.replace(/import\s+React\s+from\s+['"]react['"];?\n/g, '');
      } 
      // Basic heuristic for other unused imports (might be risky, but we can try)
      else {
        const regex1 = new RegExp(`\\b${varName}\\b\\s*,\\s*`);
        const regex2 = new RegExp(`,\\s*\\b${varName}\\b`);
        const regex3 = new RegExp(`import\\s+\\{\\s*\\b${varName}\\b\\s*\\}\\s+from\\s+['"][^'"]+['"];?\\n`);
        
        if (content.match(regex3)) {
          content = content.replace(regex3, '');
        } else if (content.match(regex1)) {
          content = content.replace(regex1, '');
        } else if (content.match(regex2)) {
          content = content.replace(regex2, '');
        }
      }
      
      fs.writeFileSync(file, content, 'utf-8');
    }
  });
  console.log("Fixed unused imports");
}
