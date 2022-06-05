/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  async rewrites() {
    return [
      {
        source: '/groot/api/:path*',
        destination: `${process.env.SERVER_URL}/:path*`,
      },
    ];
  },
  async redirects() {
    return [
      { source: '/oauth/kakao', destination: '/auth/oauth', permanent: true },
      { source: '/oauth/google', destination: '/auth/oauth', permanent: true },
    ];
  },
  reactStrictMode: true,
  webpack(config) {
    config.resolve = {
      alias: {
        '@lib': path.resolve(__dirname, './lib'),
        '@hooks': path.resolve(__dirname, './hooks'),
        '@styles': path.resolve(__dirname, './styles'),
        types: path.resolve(__dirname, './types'),
        '@components': path.resolve(__dirname, './components'),
        '@containers': path.resolve(__dirname, './containers'),
      },
      ...config.resolve,
    };
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};
