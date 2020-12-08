const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}
const BASE_URL = process.env.NODE_ENV === 'production' ?
  '/' :
  '/'
let HyperDown = require('hyperdown');
let parser = new HyperDown;
module.exports = {
  publicPath: BASE_URL,
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'))
    config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        // markdown-it config
        preset: 'default',
        breaks: true,
        raw: true,
        typographer: true,
        preprocess: function(markdownIt, source) {
          return parser.makeHtml(source);//重点在这里！！！
        }
      })
  },
  productionSourceMap: false,
  devServer: {
    open: true,
    host: '127.0.0.1',
    port: 3456,
  }
}