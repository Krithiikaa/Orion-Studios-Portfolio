/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The installed eslint (v9) / eslint-config-next (v16) don't match Next 14's
  // linter API, which errors during `next build`. Skip lint in CI builds so
  // deploys stay green; run `npm run lint` locally instead.
  eslint: { ignoreDuringBuilds: true },
  images: {
    // Local placeholder assets are optimized by next/image out of the box.
    // Allow SVG rendering for the brand tool icons in public/icons.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
