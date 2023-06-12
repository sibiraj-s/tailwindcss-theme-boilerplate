const withOpacity = (variableName) => {
  return ({ opacityValue } = {}) => {
    if (opacityValue !== undefined) {
      return `hsla(var(${variableName})/ ${opacityValue})`;
    }

    return `hsl(var(${variableName}))`;
  };
};


/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slowest': 'spin 20s linear infinite',
      },
      colors: {
        background: withOpacity('--background'),
        foreground: withOpacity('--foreground'),
        input: withOpacity('--input'),
        primary: {
          DEFAULT: withOpacity('--primary'),
          foreground: withOpacity('--primary-foreground'),
        },
      },
    },
  },
  plugins: [],
};
