require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
// Loaders
const RULES = {
  styles: {
    test: /\.(css|scss)$/,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader'
    ]
  },
  scripts: {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [],
        plugins: []
      }
    }
  }
};
// Module
const MODULE = {
  rules: [
    RULES.styles,
    RULES.scripts
  ]
};
// Plugins
const PLUGINS = [
  new HTMLWebpackPlugin({
    template: __dirname + '/src/index.html',
    filename: 'index.html',
    inject: 'body',
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      removeEmptyAttributes: true,
      removeStyleLinkTypeAttributes: true,
      keepClosingSlash: true,
      minifyJS: true,
      minifyCSS: true,
      minifyURLs: true,
    },
    chunksSortMode: 'none',
  }),
];
// CONFIG
module.exports = {
  entry: [
    './src/index.js',
    './src/app/styles/main.scss'
  ],
  output: {
    filename: 'main.min.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'build'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    modules: [
      path.resolve(__dirname, 'node_modules')
    ]
  },
  module: MODULE,
  plugins: PLUGINS,
  stats: {
    children: false
  }
};
