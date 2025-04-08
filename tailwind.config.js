import { join } from 'node:path';

/**
 * @type {import('tailwindcss').Config}
 */
export default {
  content: [join(__dirname, 'src/**/*.tsx')],
  theme: {
    /** We had some tokens here but I didn't find CSS variables for them. Review this. */
    extend: {
      fontFamily: {
        'hanken-grotesk': ['Hanken Grotesk', 'sans-serif'],
      }
    }
  },
  plugins: []
};
