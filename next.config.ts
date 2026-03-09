import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* 
     GitHub Pages is a static hosting service. 
     Next.js Server Actions will NOT work here.
  */
  output: 'export',
  // If your repository is NOT at <username>.github.io, but at <username>.github.io/<repo-name>/,
  // you MUST set basePath to '/<repo-name>' below.
  // basePath: '/your-repo-name',
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
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;