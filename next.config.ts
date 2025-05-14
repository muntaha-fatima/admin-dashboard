// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;



/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/stores",
        destination: "https://coupon-app-backend.vercel.app/api/stores", // Proxy to backend
      },
    ];
  },
};

module.exports = nextConfig;
