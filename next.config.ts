/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig; // ✅ yeh JS (CommonJS) file mein sahi hai



// // ** @type {import('next').NextConfig} */
// const nextConfig = {
//   eslint: {
//     ignoreDuringBuilds: true, // ESLint errors won't block build/deploy
//   },
//   reactStrictMode: true,
// };

// module.exports = nextConfig;
