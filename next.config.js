/** @type {import('next').NextConfig} */
const nextConfig = {images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blog.bitcoinakademin.se',
        port: '',
      },
    ],
  },}

module.exports = nextConfig
