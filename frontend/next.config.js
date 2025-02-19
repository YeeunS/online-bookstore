/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // App Router 사용
  },
  env: {
    BACKEND_API_URL: process.env.BACKEND_API_URL,
  },
};

module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};
