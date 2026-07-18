import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/react-development", destination: "/web-development", permanent: true },
      { source: "/nextjs-development", destination: "/web-development", permanent: true },
      { source: "/frontend-development", destination: "/web-development", permanent: true },
      { source: "/backend-development", destination: "/web-development", permanent: true },
      { source: "/nodejs-development", destination: "/web-development", permanent: true },
      { source: "/laravel-development", destination: "/web-development", permanent: true },
      { source: "/dotnet-development", destination: "/web-development", permanent: true },
      { source: "/java-development", destination: "/web-development", permanent: true },
      
      { source: "/flutter-development", destination: "/mobile-development", permanent: true },
      { source: "/react-native-development", destination: "/mobile-development", permanent: true },
      { source: "/swift-development", destination: "/mobile-development", permanent: true },
      { source: "/kotlin-development", destination: "/mobile-development", permanent: true },
      
      { source: "/blockchain-development", destination: "/custom-software", permanent: true },
      { source: "/smart-contracts", destination: "/custom-software", permanent: true },
      { source: "/web3", destination: "/custom-software", permanent: true },
      { source: "/crypto-wallet-development", destination: "/custom-software", permanent: true },
      { source: "/token-platforms", destination: "/custom-software", permanent: true },
      { source: "/dex-development", destination: "/custom-software", permanent: true },
      { source: "/nft-infrastructure", destination: "/custom-software", permanent: true },
      
      { source: "/aws-cloud", destination: "/cloud-applications", permanent: true },
      { source: "/azure-cloud", destination: "/cloud-applications", permanent: true },
      { source: "/google-cloud", destination: "/cloud-applications", permanent: true },
      { source: "/docker", destination: "/cloud-applications", permanent: true },
      { source: "/kubernetes", destination: "/cloud-applications", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data: https:; frame-src 'self' https://www.google.com; connect-src 'self' https://api.github.com;"
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()"
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload"
          }
        ]
      }
    ];
  }
};

export default nextConfig;
