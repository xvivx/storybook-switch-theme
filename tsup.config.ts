import { defineConfig, type Options } from 'tsup';

const NODE_TARGET = 'node22.21'; // Minimum Node version supported by Storybook 10

export default defineConfig(async () => {
  const packageJson = (await import('./package.json', { with: { type: 'json' } })).default;

  const {
    bundler: { nodeEntries = [] },
  } = packageJson;

  const commonConfig: Options = {
    /*
     keep this line commented until https://github.com/egoist/tsup/issues/1270 is resolved
     clean: options.watch ? false : true,
    */
    clean: false,
    format: ['esm'],
    treeshake: true,
    splitting: true,
    tsconfig: './tsconfig.json',
    /*
     The following packages are provided by Storybook and should always be externalized
     Meaning they shouldn't be bundled with the addon, and they shouldn't be regular dependencies either
    */
    external: [/^react($|\/)/, /^react-dom($|\/)/, /^@storybook($|\/)/, /^storybook($|\/)/],
  };

  const configs: Options[] = [
    {
      ...commonConfig,
      entry: ['src/index.ts', 'src/docs.tsx', 'src/decorator.ts', 'src/manager.tsx'],
      platform: 'browser',
      target: 'esnext',
      dts: true,
    },
  ];

  /*
   node entries are entries meant to be used in node-only
   this is useful for presets, which are loaded by Storybook when setting up configurations
   they won't have types generated for them as they're usually loaded automatically by Storybook
  */
  if (nodeEntries.length) {
    configs.push({
      ...commonConfig,
      entry: nodeEntries,
      platform: 'node',
      target: NODE_TARGET,
    });
  }

  return configs;
});
