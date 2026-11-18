import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    // Lets `next build` / `next dev` suggest security upgrades with the agent flow.
    agentUpgrade: "security",
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Fonts read by the generated Open Graph images (src/lib/og.tsx).
  outputFileTracingIncludes: {
    "/[locale]/**": ["./src/assets/fonts/**", "./src/assets/images/**"],
  },
}

export default nextConfig
