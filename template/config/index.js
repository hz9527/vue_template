// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  test: {
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: '',
    assetsPublicPath: '', // static absolute url
    productionSourceMap: false,
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js',
    styleFilename: 'css/[name].css',
    imageFilename: 'img/[name].[ext]'
  },
  prod: {
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: '',
    assetsPublicPath: '', // static absolute url
    productionSourceMap: false,
    filename: 'js/[name].[chunkhash:10].js',
    chunkFilename: 'js/[name].[chunkhash:10].js',
    styleFilename: 'css/[name].[contenthash:10].css',
    imageFilename: 'img/[name].[hash:6].[ext]'
  },
  // 基本配置
  settings:{
    dropConsole:true , // 去掉生产环境console
    enableEslint:true , // 是否开启eslint
    spriteConfig:{ // 雪碧图配置 object || false
      src:{
        path :'src/assets/icons/' // src 图片文件夹路径
      },
      target:{
        image : 'src/styles/sprite/sprite.png', // target 图片路径
        css : 'src/styles/sprite/sprite.scss' // target css 路径
      },
      padding:10 ,  // icons padding
      cssImageRef: '~sprite.png' // 生成图片相对css内引用的路径
    }
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
