/* eslint-disable @typescript-eslint/no-var-requires */
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = (env) => ({
  mode: env.prod ? 'production' : 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: env.prod ? 'static/js/[name].[contenthash:8].js' : 'static/js/bundle.js',
    assetModuleFilename: 'static/media/[name].[hash][ext]',
    publicPath: '/',
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.ts', '.tsx', '.json', '.jsx'],
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        oneOf: [
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            type: 'asset',
          },
          {
            test: /\.(js|jsx|ts|tsx)$/,
            include: path.resolve(__dirname, 'src'),
            loader: require.resolve('babel-loader'),
            options: {
              cacheDirectory: true,
              cacheCompression: false,
              compact: env.prod ? true : false,
            },
          },
          {
            test: /\.(scss|sass)$/,
            exclude: /\.module\.(scss|sass)$/,
            use: [
              env.prod
                ? {
                    loader: MiniCssExtractPlugin.loader,
                  }
                : require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 3,
                  modules: {
                    mode: 'icss',
                  },
                },
              },
              {
                loader: require.resolve('sass-loader'),
              },
            ].filter(Boolean),
            sideEffects: true,
          },
          {
            exclude: [/^$/, /\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
            type: 'asset/resource',
          },
        ],
      },
    ].filter(Boolean),
  },
  plugins: [
    new HtmlWebpackPlugin(
      Object.assign(
        {},
        {
          inject: true,
          template: path.resolve(__dirname, 'public/index.html'),
        }
      )
    ),
    new MiniCssExtractPlugin(),
  ].filter(Boolean),
  // Turn off performance processing because we utilize
  // our own hints via the FileSizeReporter
  performance: false,
  devServer: {
    hot: true,
    historyApiFallback: true,
    port: 3000,
  },
});
