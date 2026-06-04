import { definePreviewAddon } from 'storybook/internal/csf';
import docsPreview from './docs';
import decoratorPreview from './decorator';
import type { Options } from './types';

export * from './useTheme';

export default (options?: Options) => {
  const { docs = true, decorator = true } = options || {};
  return definePreviewAddon({
    ...(docs ? docsPreview : {}),
    ...(decorator ? decoratorPreview : {}),
  });
};
