import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/react-development", destination: "/en", permanent: true },
      { source: "/nextjs-development", destination: "/en", permanent: true },
      { source: "/frontend-development", destination: "/en", permanent: true },
      { source: "/backend-development", destination: "/en", permanent: true },
      { source: "/flutter-development", destination: "/en", permanent: true },
      { source: "/mobile-development", destination: "/en", permanent: true }
    ];
  }
};

export default nextConfig;
