// 




/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // During build eslint errors are treated as warnings
    ignoreDuringBuilds: true,
  },
  typescript: {
    // During build typescript errors are treated as warnings
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      }
    ],
  },
  // Increase memory limit for builds
  experimental: {
    webpackMemoryOptimizations: true,
  }
};

export default nextConfig;

// // ** @type {import('next').NextConfig} */
// const nextConfig = {
//   eslint: {
//     ignoreDuringBuilds: true, // ESLint errors won't block build/deploy
//   },
//   reactStrictMode: true,
// };

// module.exports = nextConfig;
