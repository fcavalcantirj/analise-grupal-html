const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: 'img', to: 'img' },
        { from: 'css', to: 'css' },
        { from: 'android-chrome-192x192.png', to: 'android-chrome-192x192.png' },
        { from: 'android-chrome-512x512.png', to: 'android-chrome-512x512.png' },
        { from: 'apple-touch-icon.png', to: 'apple-touch-icon.png' },
        { from: 'favicon-16x16.png', to: 'favicon-16x16.png' },
        { from: 'favicon-32x32.png', to: 'favicon-32x32.png' },
        { from: 'favicon.ico', to: 'favicon.ico' },
        { from: '404.html', to: '404.html' },
        { from: 'about.html', to: 'about.html' },
        { from: 'site.webmanifest', to: 'site.webmanifest' },
      ],
    }),
  ],
});
