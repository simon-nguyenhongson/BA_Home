/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Legacy alias — remap về DS Blue 600 để LoginPage/ProjectCRTab lên tông mới
        app: {
          blue:  '#155EEF',
          red:   '#F04438',
          gray:  '#F9FAFB',
        },
        // GHI ĐÈ thang gray MẶC ĐỊNH của Tailwind bằng gray của DS.
        //
        // VÌ SAO: app dùng 552 lượt class gray-* của Tailwind (text-gray-600 ×161,
        // text-gray-400 ×117, text-gray-500 ×113, border-gray-200 ×53…). Thang gray của
        // Tailwind KHÔNG khớp DS — gray-600 #4B5563 vs #475467, gray-500 #6B7280 vs
        // #667085, gray-200 #E5E7EB vs #EAECF0, gray-900 #111827 vs #101828. Nên 552 chỗ
        // đó đang tô màu lệch DS mà không ai thấy vì lệch rất nhỏ.
        // Ghi đè ở đây sửa cả 552 chỗ bằng một thay đổi, không phải sửa từng file.
        //
        // Giá trị lấy từ design-system/tokens/palette.css. DS không có bước 800 và 950:
        //  - 800 dùng #1D2939 (extension BA_Home, đã ghi trong styles.css)
        //  - 950 KHÔNG khai — nếu ai đó viết gray-950 thì Tailwind báo class không tồn tại,
        //    đó là chủ ý: buộc dùng bước có trong DS.
        gray: {
          25:  '#FCFCFD',
          50:  '#F9FAFB',
          100: '#F2F4F7',
          200: '#EAECF0',
          300: '#D0D5DD',
          400: '#98A2B3',
          500: '#667085',
          600: '#475467',
          700: '#344054',
          800: '#1D2939',
          900: '#101828',
        },
        // SooBinZHongSon DS palette (xem docs/design/DS-ADOPTION-SPEC.md)
        ds: {
          blue: {
            25: '#F5F8FF', 50: '#EFF4FF', 100: '#D1E0FF', 200: '#B2CCFF',
            300: '#84ADFF', 400: '#528BFF', 500: '#2970FF', 600: '#155EEF', 700: '#004EEB',
          },
          gray: {
            25: '#FCFCFD', 50: '#F9FAFB', 100: '#F2F4F7', 200: '#EAECF0',
            300: '#D0D5DD', 400: '#98A2B3', 500: '#667085', 600: '#475467',
            700: '#344054', 800: '#1D2939', 900: '#101828',
          },
          error: {
            25: '#FFFBFA', 50: '#FEF3F2', 100: '#FECDCA', 300: '#FDA29B',
            500: '#F04438', 600: '#D92D20', 700: '#B42318',
          },
          violet: { 600: '#7F56D9', 700: '#6941C6' },
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        logo: ['IBM Plex Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'ds-xs': '0 1px 2px rgba(16,24,40,.05)',
        'ds-sm': '0 1px 3px rgba(16,24,40,.10), 0 1px 2px rgba(16,24,40,.06)',
        'ds-md': '0 4px 8px -2px rgba(16,24,40,.10), 0 2px 4px -2px rgba(16,24,40,.06)',
        'ds-lg': '0 12px 16px -4px rgba(16,24,40,.08), 0 4px 6px -2px rgba(16,24,40,.03)',
        'ds-xl': '0 20px 24px -4px rgba(16,24,40,.08), 0 8px 8px -4px rgba(16,24,40,.03)',
        focus: '0 0 0 4px #EFF4FF',
      },
      borderRadius: {
        control: '8px',
        card: '12px',
      },
      height: {
        'control-s': '28px',
        'control-m': '32px',
        'control-l': '40px',
        row: '40px',
      },
    },
  },
  plugins: [],
}
