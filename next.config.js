/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    config.module.rules.push({
      test: /\.tsx?$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: 'ts-loader',
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
