/** @type {import('next').NextConfig} */
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
};

module.exports = nextConfig;
