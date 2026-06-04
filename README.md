# storybook-addon-theme

A lightweight Storybook addon for synchronised theme switching across the Manager UI, Canvas stories, and Docs pages.

## Install

Use your preferred package manager:

```bash
# npm
npm install storybook-addon-theme

# yarn
yarn add storybook-addon-theme

# pnpm
pnpm add storybook-addon-theme

# bun
bun add storybook-addon-theme
```

## Usage

Register the addon in your Storybook main configuration (for example, `.storybook/main.js`):

```ts
// .storybook/main.js
import { defineMain } from '@storybook/react-vite/node';

export default defineMain({
  addons: [
    {
      name: 'storybook-addon-theme',
      options: {
        decorator: false,
        docs: false,
      },
    },
  ],
});
```

## Options

- `decorator`: Whether to use the built-in decorator. When enabled, switching themes will toggle a `dark` class on the `<html>` element.
- `docs`: Whether to use the Docs container integration. When enabled, the addon will pass the selected theme to `DocsContainer` so documentation pages can match the current theme.

If you use Tailwind CSS for your component library, the default behavior (toggling the `dark` class on `<html>`) will typically be sufficient.

## Customization

You can keep the addon enabled but customize how your preview and docs respond to theme changes. Below is an example `preview.tsx` that shows how to make stories and Docs pages react to the selected theme.

```tsx
import React, { useEffect } from 'react';
import { definePreview } from '@storybook/react-vite';
import { DocsContainer } from '@storybook/addon-docs/blocks';
import { themes } from 'storybook/theming';
import { useTheme } from 'storybook-addon-theme';

const preview = definePreview({
  decorators: [
    // Make stories respond to theme changes
    (Story) => {
      const theme = useTheme();
      useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
      }, [theme]);
      return <Story />;
    },
  ],
  parameters: {
    docs: {
      // Make Docs pages respond to theme changes by passing the appropriate theme
      container: (props) => {
        const theme = useTheme();
        return <DocsContainer {...props} theme={theme === 'dark' ? themes.dark : themes.light} />;
      },
    },
  },
});

export default preview;
```

## Notes

- The addon focuses on synchronising theme selection across Storybook's Manager, Canvas, and Docs UI.
- Keep `decorator` enabled if you want automatic DOM class toggling (useful for Tailwind dark mode).
- Keep `docs` enabled if you want Docs pages to reflect the selected theme automatically.
