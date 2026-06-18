import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  allowedDevOrigins: ['thuydx.pro', '*.thuydx.pro', '113.161.47.166', 'thuydx.com', 'wds.vn', '65.21.54.30'],
}

export default nextConfig
