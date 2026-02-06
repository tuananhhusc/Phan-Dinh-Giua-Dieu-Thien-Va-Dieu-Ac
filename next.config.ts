import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Required for Static Site Generation (GitHub Pages)
  images: {
    unoptimized: true, // Required because GitHub Pages doesn't support Next.js Image Optimization
  },
  basePath: '/Phan-Dinh-Giua-Dieu-Thien-Va-Dieu-Ac',
};

export default nextConfig;
