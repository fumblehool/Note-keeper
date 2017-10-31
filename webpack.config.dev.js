const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
 
module.exports = {
  // Entry file.
  entry: './src/index.jsx',
  
  // Output file. 
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
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
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader']
      }
    ],
  },

  // enable Source maps
  devtool: 'source-map',

  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },

  // DevServer config
  devServer: {
    contentBase: './src',
    historyApiFallback: true,
    hot: true,
    disableHostCheck: true,
  },

  // Webpack Plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
