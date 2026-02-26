const passthroughProcessor = {
  preprocess() {
    return [''];
  },
  postprocess(messages) {
    return messages[0] ?? [];
  },
};

const lightweightAstroPlugin = {
  processors: {
    astro: passthroughProcessor,
  },
};

const lightweightTsPlugin = {
  processors: {
    ts: passthroughProcessor,
  },
};

export default [
  {
    ignores: ['dist/**', '.astro/**', 'node_modules/**'],
  },
  {
    files: ['src/**/*.ts'],
    plugins: {
      ts: lightweightTsPlugin,
    },
    processor: 'ts/ts',
    rules: {},
  },
  {
    files: ['src/**/*.astro'],
    plugins: {
      astro: lightweightAstroPlugin,
    },
    processor: 'astro/astro',
    rules: {},
  },
];
