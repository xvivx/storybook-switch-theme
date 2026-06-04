import { definePreviewAddon } from 'storybook/internal/csf';

import addonAnnotations from './preview';

export * from './useTheme';

export default () => definePreviewAddon(addonAnnotations);
