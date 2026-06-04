import { defineMain } from '@storybook/react-vite/node';

export default defineMain({
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-docs',
    {
      name: import.meta.resolve('./local-preset.ts'),
      options: {
        decorator: true,
        docs: true,
      },
    },
  ],
  framework: '@storybook/react-vite',
});
