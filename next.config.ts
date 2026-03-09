import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* 
     NOTE: GitHub Pages is a static hosting service. 
     Next.js Server Actions (like your AI Polisher) will NOT work on GitHub Pages.
     To deploy there, we must use static export.
  */
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Ensure links work correctly on static hosts by adding trailing slashes
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
