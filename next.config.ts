
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* 
     GitHub Pages is a static hosting service. 
     Next.js Server Actions will NOT work here.
     Output 'export' generates a static 'out' folder.
  */
  output: 'export',
  
  /**
   * IMPORTANT: Set this to your repository name.
   * If your repo is https://github.com/AmitNaganuri/my-portfolio,
   * then basePath should be '/my-portfolio'.
   * If you are using a custom domain, you can remove this or set to ''.
   */
  basePath: '/REPLACE_WITH_YOUR_REPO_NAME', 
  
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
  /* trailingSlash ensures that each route gets its own index.html file, which works better with GitHub Pages */
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
