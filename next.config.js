// /** @type {import('next').NextConfig} */
// module.exports = {
//   webpack(config, options) {
//     const { isServer } = options;
//     config.module.rules.push({
//       test: /\.(ogg|mp3|wav|mpe?g)$/i,
//       exclude: config.exclude,
//       use: [
//         {
//           loader: require.resolve('url-loader'),
//           options: {
//             limit: config.inlineImageLimit,
//             fallback: require.resolve('file-loader'),
//             publicPath: `${config.assetPrefix}/_next/static/images/`,
//             outputPath: `${isServer ? '../' : ''}static/images/`,
//             name: '[name]-[hash].[ext]',
//             esModule: config.esModule || false
//           }
//         }
//       ]
//     });

//     return config;
//   }
// };

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { isServer }) {
    if (!isServer) {
      // We're in the browser build, so we can safely exclude the sharp module
      config.externals.push('sharp');
    }

    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      exclude: config.exclude,
      use: [
        {
          loader: require.resolve('url-loader'),
          options: {
            limit: config.inlineImageLimit,
            fallback: require.resolve('file-loader'),
            publicPath: `${config.assetPrefix}/_next/static/images/`,
            outputPath: `${isServer ? '../' : ''}static/images/`,
            name: '[name]-[hash].[ext]',
            esModule: config.esModule || false
          }
        }
      ]
    });

    return config;
  }
};

module.exports = nextConfig;
