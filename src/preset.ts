import { fileURLToPath } from 'node:url';
import type { CLIOptions } from 'storybook/internal/types';
import type { Options } from './types';

export default function preset(_: CLIOptions, options: Options = {}) {
  const { docs = true, decorator = true } = options;
  const previewAnnotations: string[] = [];
  if (docs) previewAnnotations.push(fileURLToPath(import.meta.resolve('./docs.js')));
  if (decorator) previewAnnotations.push(fileURLToPath(import.meta.resolve('./decorator.js')));

  return {
    managerEntries: [fileURLToPath(import.meta.resolve('./manager.js'))],
    previewAnnotations,
  };
}
