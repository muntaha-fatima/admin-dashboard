/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
};

export default nextConfig; // ✅ Yeh hi likhna hai TypeScript mein


// // ** @type {import('next').NextConfig} */
// const nextConfig = {
//   eslint: {
//     ignoreDuringBuilds: true, // ESLint errors won't block build/deploy
//   },
//   reactStrictMode: true,
// };

// module.exports = nextConfig;
