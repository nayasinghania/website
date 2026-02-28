import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.svgrepo.com/**",
      },
      {
        protocol: "https",
        hostname: "striking-kindness-e0d93214bb.media.strapiapp.com/**",
      },
    ],
  },
};

export default nextConfig;
