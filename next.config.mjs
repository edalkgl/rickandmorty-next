/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn-w1.netlify.app",
        protocol: "https",
      },
      {
        hostname: "rickandmortyapi.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
