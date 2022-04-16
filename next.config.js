/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8080/:path*',
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
