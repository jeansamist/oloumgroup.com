import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Fonts read by the generated Open Graph images (src/lib/og.tsx).
  outputFileTracingIncludes: {
    "/[locale]/**": ["./src/assets/fonts/**", "./src/assets/images/**"],
  },
}

export default nextConfig
