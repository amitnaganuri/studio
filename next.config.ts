import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* 
     GitHub Pages is a static hosting service. 
     Next.js Server Actions will NOT work here.
     Output 'export' generates a static 'out' folder.
  */
  output: 'export',
  // IMPORTANT: Set this to your repository name if not using a custom domain.
  // Example: basePath: '/my-portfolio-repo',
  // basePath: '', 
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
