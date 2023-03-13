/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // basePath: '/gaia-box-gourmet-web',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
}

module.exports = nextConfig
