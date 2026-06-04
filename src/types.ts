export type Theme = 'light' | 'dark';

export type Options = {
  /** 是否启用 docs container 注入（默认启用） */
  docs?: boolean;
  /** 是否启用 canvas/story 装饰器注入（默认启用） */
  decorator?: boolean;
};
