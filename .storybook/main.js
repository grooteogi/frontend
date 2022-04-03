const path = require('path');

const resolvePath = _path => path.join(process.cwd(), _path);

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)', '../src/**/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async config => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        '@emotion/styled': resolvePath('node_modules/@emotion/styled'),
      },
    },
  }),
};
