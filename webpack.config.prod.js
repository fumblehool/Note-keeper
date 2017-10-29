const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  // Entry file.
  entry: './src/index.jsx',

  // Output file
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.bundle.js',
  },

  // loaders
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            'es2015',
            'react',
            'stage-2',
          ],
          plugins: [
          ],
          compact: false,
        },
      },
    ],
  },

  // enable Source maps
  devtool: 'source-map',

  // Webpack PLugins
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
};
