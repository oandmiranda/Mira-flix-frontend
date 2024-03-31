// next.config.js
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['image.tmdb.org'], // Add images API domain here
  },
};

module.exports = nextConfig;
