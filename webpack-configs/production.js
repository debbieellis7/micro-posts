const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
 mode: 'production',
 devtool: false,
 plugins: [
  new UglifyJSPlugin({
   parallel: true,
   sourceMap: true,
   uglifyOptions: {
     output: {
       comments: false
     }
   }
  }),
  new webpack.SourceMapDevToolPlugin({
    filename: '[name].js.map'
  })
 ]
}
