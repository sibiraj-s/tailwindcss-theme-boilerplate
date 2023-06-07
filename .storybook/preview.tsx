import type { Preview } from '@storybook/react';

import '../src/index.css'

const Theme = {
  Light: 'light',
  Dark: 'dark'
}

type Theme = 'light' | 'dark'

interface BackgroundValue {
  name: Theme,
  value: string;
}

interface Backgrounds {
  values: BackgroundValue[]
}

const getPreferredTheme = () => {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? Theme.Dark : Theme.Light
}

const isValidTheme = (theme:Theme | unknown) => {
  return theme === Theme.Dark || theme === Theme.Light
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const backgrounds = context.parameters.backgrounds as Backgrounds
      const globalBackground = context.globals.backgrounds as BackgroundValue | null

      const selectedTheme = backgrounds.values.find(bg => bg.value === globalBackground?.value)?.name
      const theme = isValidTheme(selectedTheme) ? selectedTheme : getPreferredTheme()

      return (
        <div data-theme={theme}>
          <Story />
        </div>
      )
    },
  ],
};

export default preview;
