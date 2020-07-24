const RouteManifest = require('webpack-route-manifest')

module.exports = {
  webpack: {
    configure: webpackConfig => {
      webpackConfig.plugins.push(
        new RouteManifest({
          routes(str) {
            let out = str.replace('pages', '').toLowerCase()
            if (out === '/home') out = '/'
            return out
          },
          filename: 'rmanifest.json',
        })
      )
      return webpackConfig
    },
  },
}
