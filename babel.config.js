module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'macros',
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          alias: {
            '#app': './src/app',
            '#modules': './src/modules',
            '#shared': './src/shared',
            '#testing': './src/testing',
          },
        },
      ],
    ],
  };
};
