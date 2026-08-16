import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/investment', destination: '/properties', permanent: true },
      { source: '/blog', destination: '/properties', permanent: true },
      { source: '/blog/:path*', destination: '/properties', permanent: true },
    ];
  },
};

export default nextConfig;
