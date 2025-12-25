/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://particles.js.org",
      },
    ],
  },
};

export default nextConfig;
