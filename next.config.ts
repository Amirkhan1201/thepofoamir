import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // basePath and assetPrefix-a remove panniyachu, so root-laye work aagum
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;