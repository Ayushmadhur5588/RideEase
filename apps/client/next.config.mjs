/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@repo/ui'], // Transpile your `packages/ui` folder
};

export default nextConfig;
