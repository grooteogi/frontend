/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.SERVER_URL}/:path*`,
      },
    ];
  },
  async redirects() {
    return [
      { source: '/oauth/kakao', destination: '/auth/test', permanent: true },
      { source: '/oauth/google', destination: '/auth/test', permanent: true },
    ];
  },
  reactStrictMode: true,
  webpack(nextConfig) {
    nextConfig.resolve = {
      alias: {
        '@lib': path.resolve(__dirname, './lib'),
        '@hooks': path.resolve(__dirname, './hooks'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@containers': path.resolve(__dirname, 'src/utils'),
      },
      ...nextConfig.resolve,
    };
    return nextConfig;
  },
};

export default nextConfig;
