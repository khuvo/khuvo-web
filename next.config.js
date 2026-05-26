/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If deploying to a custom sub-path (e.g. github.com/user/khuvo-web),
  // uncomment and set basePath:
  // basePath: '/khuvo-web',
};

module.exports = nextConfig;
