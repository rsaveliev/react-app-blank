require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
// Loaders
const RULES = {
  styles: {
    test: /\.scss$/,
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
        presets: ['@babel/preset-env', '@babel/preset-react'],
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
    inject: 'body'
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
    path: path.resolve(__dirname, 'build')
  },
  resolve: {
    extensions: ['.js', '.scss'],
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
