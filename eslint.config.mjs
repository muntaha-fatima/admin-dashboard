/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // This disables ESLint errors from blocking deployment
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
