/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.fallback = { child_process: false };
    return config;
  },
};

export default nextConfig;
