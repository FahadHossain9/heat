import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      {
        protocol: "https",
        hostname: "factoryze.s3.us-east-005.backblazeb2.com",
      },
    ],
  },
};

export default nextConfig;
