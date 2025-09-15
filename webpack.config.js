const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';

  return {
    entry: './src/js/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true, // clears dist before each build
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'sass-loader'
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'main.css',
      }),
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
    ],
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'dist'),
      },
      hot: true,
      port: 8080,
      open: true,
    },
    devtool: isProd ? false : 'source-map',
    mode: isProd ? 'production' : 'development',
  };
};