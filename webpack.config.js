const webpackMerge = require('webpack-merge')
const path = require('path')
const PROD = (process.env.NODE_ENV === 'production')
const production = require('./webpack-configs/production')
const development = require('./webpack-configs/development')
const modeConfig = PROD ? production : development

module.exports = webpackMerge(
 {
  entry: {
   'app.bundle': './src/app.js'
  },
  output: {
   path: __dirname + '/dist/assets/js/',
   filename: '[name].min.js'
  },
  module: {
   rules: [
    {
     test: /\.js$/,
     include: [
      path.resolve(__dirname, 'src'),
     ],
     loader: 'babel-loader',
     options: { babelrc: true }
    }
   ]
  }
 },
 modeConfig
)
