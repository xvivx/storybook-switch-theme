/**
 * A decorator is a way to wrap a story in extra “rendering” functionality. Many addons define decorators
 * in order to augment stories:
 * - with extra rendering
 * - gather details about how a story is rendered
 *
 * When writing stories, decorators are typically used to wrap stories with extra markup or context mocking.
 *
 * https://storybook.js.org/docs/react/writing-stories/decorators
 */

import React, { useEffect } from 'react';

import { useTheme } from './useTheme';
import { DocsContainer, type DocsContainerProps } from '@storybook/addon-docs/blocks';
import type { ProjectAnnotations, Renderer } from 'storybook/internal/types';
import { themes } from 'storybook/theming';

/**
 * Note: if you want to use JSX in this file, rename it to `preview.tsx`
 * and update the entry prop in tsup.config.ts to use "src/preview.tsx",
 */

const preview: ProjectAnnotations<Renderer> = {
  decorators: [
    (storyFn, context) => {
      const { viewMode, globals } = context;
      const theme = useTheme();
      const storyTheme = viewMode === 'story' ? globals.theme : undefined;
      // story模式下可能是chromatic用于组件快照传进来的theme, 优先使用
      const isDark = (storyTheme || theme) === 'dark';
      useEffect(() => {
        document.documentElement.classList.toggle('dark', isDark);
      }, [isDark]);
      return storyFn(context);
    },
  ],
  parameters: {
    docs: {
      container: (props: DocsContainerProps<Renderer>) => {
        const theme = useTheme();
        return <DocsContainer {...props} theme={theme === 'dark' ? themes.dark : themes.light} />;
      },
    },
  },
};

export default preview;
