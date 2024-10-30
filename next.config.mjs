/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'books.google.com',
      },
    ],
  },
  swcMinify: true,
  env: {
    NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY,
  },
};

export default nextConfig;
