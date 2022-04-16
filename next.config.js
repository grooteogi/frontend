/** @type {import('next').NextConfig} */
import { resolve } from 'path';

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
        '@lib': resolve(__dirname, './lib'),
        '@hooks': resolve(__dirname, './hooks'),
        '@components': resolve(__dirname, 'src/components'),
        '@containers': resolve(__dirname, 'src/containers'),
      },
      ...nextConfig.resolve,
    };
    return nextConfig;
  },
};

export default nextConfig;
