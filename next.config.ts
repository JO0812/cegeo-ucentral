import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  basePath: "/cegeo-ucentral",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
