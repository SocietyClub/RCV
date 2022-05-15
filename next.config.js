const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  distDir: 'build',
  basePath: isProd ? '/RCV' : '',
  assetPrefix: isProd ? '/RCV/' : '',
};
