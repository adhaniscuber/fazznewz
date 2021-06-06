const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const pwaConfig = withPWA({
  pwa: {
    dest: "public",
  },
});

const config = {};

module.exports = withPlugins([[withBundleAnalyzer, pwaConfig]], config);
