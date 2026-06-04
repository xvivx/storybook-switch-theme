import type { Preview } from '@storybook/react-vite';

export default {
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
} as Preview;

// import { definePreview } from '@storybook/react-vite';
// import addonDocs from '@storybook/addon-docs';
// import addTheme from '../dist';

// export default definePreview({
//   addons: [addonDocs(), addTheme({ docs: true })],
//   parameters: {
//     docs: {
//       source: { type: 'code' },
//       codePanel: true,
//     },
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/,
//       },
//     },
//   },
//   initialGlobals: {
//     background: { value: 'light' },
//   },
// });
