import { fileURLToPath } from 'node:url';

type Options = {
  /** 是否启用 docs container 注入（默认启用） */
  docs?: boolean;
  /** 是否启用 canvas/story 装饰器注入（默认启用） */
  decorator?: boolean;
};

export default function preset(_: any, options: Options = {}) {
  const { docs = true, decorator = true } = options;
  const previewAnnotations: string[] = [];
  if (docs) {
    previewAnnotations.push(fileURLToPath(import.meta.resolve('./docs.js')));
  }
  if (decorator) {
    previewAnnotations.push(fileURLToPath(import.meta.resolve('./decorator.js')));
  }
  return {
    managerEntries: [fileURLToPath(import.meta.resolve('./manager.js'))],
    previewAnnotations: previewAnnotations,
  };
}
