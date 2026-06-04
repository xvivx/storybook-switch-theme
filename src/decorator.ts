import type { ProjectAnnotations, Renderer } from 'storybook/internal/types';
import { useEffect } from 'react';
import { useTheme } from './useTheme';

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
};

export default preview;
