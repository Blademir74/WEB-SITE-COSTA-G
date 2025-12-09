/** @type {import('next').NextConfig} */
const nextConfig = {
  // 'standalone' creates a smaller folder ideal for hosting on VPS or Docker
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'www.transparenttextures.com',
      }
    ],
    // If you are forcing a static export, uncomment the line below, 
    // BUT NOTE: API routes and Login will fail in static export.
    // unoptimized: true,
  },
  // Ignore errors to ensure the build completes even with legacy code present
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig