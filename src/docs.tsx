import React from 'react';
import { DocsContainer, type DocsContainerProps } from '@storybook/addon-docs/blocks';
import { themes } from 'storybook/theming';
import { useTheme } from './useTheme';

export default {
  parameters: {
    docs: {
      container: (props: DocsContainerProps) => {
        const theme = useTheme();
        return <DocsContainer {...props} theme={theme === 'dark' ? themes.dark : themes.light} />;
      },
    },
  },
};
