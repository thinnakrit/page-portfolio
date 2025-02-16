import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? "/page-portfolio/" : "",
  basePath: isProd ? "/page-portfolio" : "",
  output: "export",
};

export default nextConfig;
