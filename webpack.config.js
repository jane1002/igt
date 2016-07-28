/**
 * Created by Onion on 7/27/16.
 */
const webpack = require('webpack');
const path = require('path');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const SERVER_PORT = require('./const.json').SERVER_PORT;
const DEV_SERVER_PORT = require('./const.json').DEV_SERVER_PORT;

module.exports = {
  name: 'client',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    stats: {
      colors: true
    },
    contentBase: './src',
    port: DEV_SERVER_PORT,
    proxy: {
      '/api*': {
        target: `http://localhost:${SERVER_PORT}`,
        secure: false
      }
    }
  },
  entry: {
    app: path.resolve(__dirname, 'src/index.js'),
    vendor: ['react', 'react-dom', 'redux', 'react-redux', 'redux-thunk',
      'react-router', 'isomorphic-fetch', 'es6-promise']
  },
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: './bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.css$/, include: path.resolve(__dirname, 'src'), loader: 'style-loader!css-loader'
      },
      {
        test: /\.js[x]?$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'commons.js',
      minChunks: Infinity
    }),
    new OpenBrowserPlugin({ url: `http://localhost:${DEV_SERVER_PORT}` })
  ]
};