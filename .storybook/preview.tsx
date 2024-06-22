import type { Decorator, Preview } from '@storybook/react';
import { useDarkMode } from 'storybook-dark-mode';

import '../src/index.css'
import { useEffect } from 'react';

const WithThemeProvider: Decorator = (Story) => {
  const isDarkMode = useDarkMode();

  useEffect(() => {
    document.body.classList.remove('dark', 'light');
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return <Story />;
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: { disable: true },
  },
  decorators: [WithThemeProvider],
};

export default preview;
