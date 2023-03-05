/** @type {import('next').NextConfig} */
const ghPages = process.env.DEPLOY_TARGET === 'gh-pages';

const nextConfig = {
  reactStrictMode: true,
  basePath: ghPages ? '/src/' : '',
  assetPrefix: ghPages ? '/public/' : '',
}

module.exports = nextConfig
