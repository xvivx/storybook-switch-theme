import { fileURLToPath } from 'node:url';

type Options = {
  decorator?: boolean;
  docs?: boolean;
};

export const previewAnnotations = (entries: string[] = [], options: Options = {}) => {
  const result = [...entries];

  if (options.decorator !== false) {
    result.push(fileURLToPath(import.meta.resolve('./decorator')));
  }

  if (options.docs !== false) {
    result.push(fileURLToPath(import.meta.resolve('./docs')));
  }

  return result;
};
