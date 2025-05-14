import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  eslint: {
    ignoreDuringBuilds: true, // ✅ This prevents ESLint errors from breaking deployment
  },
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
