import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Required for Static Site Generation (GitHub Pages)
  images: {
    unoptimized: true, // Required because GitHub Pages doesn't support Next.js Image Optimization
  },
  // IMPORTANT: If deploying to a sub-path (e.g., username.github.io/repo-name),
  // uncomment the line below and replace '/repo-name' with your repository name.
  // basePath: '/repo-name',
};

export default nextConfig;
