const path = require('path');
const webpack = require('webpack')
module.exports = {
  devtool: 'source-map',
  entry: './app.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin({
  //     sourceMap: true
  //   }),
  // ]
  
};