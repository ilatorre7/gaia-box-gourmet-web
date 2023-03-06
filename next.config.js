/** @type {import('next').NextConfig} */
const ghPages = process.env.DEPLOY_TARGET === 'gh-pages';

const nextConfig = {
  reactStrictMode: true,
  basePath: ghPages ? '/gaia-box-gourmet-web/' : '',
}

module.exports = nextConfig
