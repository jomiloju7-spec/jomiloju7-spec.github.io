/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages user sites (username.github.io) are served as plain static
  // files from the repo root with no Node server available, so we export a
  // fully static build. See README.md for the full build/publish flow.
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
