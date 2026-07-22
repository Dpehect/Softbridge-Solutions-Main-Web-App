import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      { source: "/en", destination: "/", permanent: true },
      { source: "/tr", destination: "/", permanent: true },
      { source: "/pt", destination: "/", permanent: true },
      { source: "/fr", destination: "/", permanent: true },
      { source: "/it", destination: "/", permanent: true },
      { source: "/us", destination: "/", permanent: true },
      { source: "/uk", destination: "/", permanent: true },
      { source: "/ie", destination: "/", permanent: true },
    ];
  },
  async headers() {
    return [{ source: "/:path*", headers: [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "DENY" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    ] }];
  },
};
export default nextConfig;
