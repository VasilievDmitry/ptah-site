const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: require('./aliases.config').webpack
    },
    plugins: [
      new PrerenderSPAPlugin({
        // Required - The path to the webpack-outputted app to prerender.
        staticDir: path.join(__dirname, 'dist'),
        // Required - Routes to render.
        routes: [
          '/',
          '/login',
          '/signup',
          '/restore',
          '/after-sign-up',
          '/account',
          '/policy',
          '/terms',
          '/about',
          '/features',
          '/oauth2',
          '/ui',
          '/404',
        ],
      })
    ]
  },
  pwa: {
    name: 'Ptah — landing page builder for games.',
    iconPaths: {
      favicon32: 'https://s3.protocol.one/images/icons/ptah_icon-32.png',
      favicon16: 'https://s3.protocol.one/images/icons/ptah_icon-16.png',
      appleTouchIcon: 'https://s3.protocol.one/images/icons/ptah_icon-152.png',
      msTileImage: 'https://s3.protocol.one/images/icons/ptah_icon-114.png'
    }
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@assets/styles/styles.scss";`
      }
    }
  },
  chainWebpack: config => {
    // удаляем prefetch плагин:
    config.plugins.delete('prefetch')

    const svgRule = config.module.rule("svg");

    svgRule.uses.clear();

    svgRule
      .use("babel-loader")
        .loader("babel-loader")
        .end()
      .use("vue-svg-loader")
        .loader("vue-svg-loader")
        .options({
          svgo: {
            plugins: [
              { removeDimensions: true },
              { removeUselessStrokeAndFill: true },
              { removeViewBox: false }
            ]
          }
        });
  }
}
