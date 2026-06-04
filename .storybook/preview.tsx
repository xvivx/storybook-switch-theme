import type { Preview } from '@storybook/react-vite';

const preview: Preview = {
  parameters: {
    docs: {
      source: { type: 'code' },
      codePanel: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  initialGlobals: {
    background: { value: 'light' },
  },
};

export default preview;
