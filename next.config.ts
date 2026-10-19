import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Export static HTML for Cloudflare Pages / CDN hosting */
  output: "export",
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
