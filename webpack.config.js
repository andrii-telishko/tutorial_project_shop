const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all',
    },
  };

  if (!devMode) {
    config.minimizer = [
      new OptimizeCssAssetPlugin(),
      new TerserWebpackPlugin(),
    ];
  }
  return config;
};

const cssLoader = extra => {
  const loaders = [
    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
    'css-loader',
  ];

  if (extra) {
    loaders.push(extra);
  }
  return loaders;
};

const jsLoaders = () => {
  const loaders = [
    {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  ];

  if (devMode) {
    loaders.push('eslint-loader');
  }
  return loaders;
};

module.exports = {
  mode: 'development',
  entry: {
    index: ['@babel/polyfill', './src/index.js'],
    checkout: ['@babel/polyfill', './src/js/checkout/checkout.js'],
    products: ['@babel/polyfill', './src/js/products/products.js'],
    categories: ['@babel/polyfill', './src/js/category/categories.js'],
  },
  output: {
    filename: 'js/[name][contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },

  optimization: optimization(),

  devServer: {
    port: 4004,
  },

  devtool: devMode ? 'source-map' : 'nosources-source-map',
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['index'],
      minify: {
        collapseWhitespace: !devMode,
      },
    }),
    new HTMLWebpackPlugin({
      template: './src/checkout.html',
      filename: 'checkout.html',
      chunks: ['checkout'],
      minify: {
        collapseWhitespace: !devMode,
      },
    }),
    new HTMLWebpackPlugin({
      template: './src/products.html',
      filename: 'products.html',
      chunks: ['products'],
      minify: {
        collapseWhitespace: !devMode,
      },
    }),
    new HTMLWebpackPlugin({
      template: './src/categories.html',
      filename: 'categories.html',
      chunks: ['categories'],
      minify: {
        collapseWhitespace: !devMode,
      },
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoader(),
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ['file-loader'],
      },
      {
        test: /\.s[ac]ss$/,
        use: cssLoader('sass-loader'),
        generator: {
          filename: '[path][name].[ext]',
        },
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: jsLoaders(),
        generator: {
          filename: '[path][name].[ext]',
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|jfif|webp|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: '[path][name].[ext]',
        },
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
              },

              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },

              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.hbs$/,
        use: 'handlebars-loader',
      },
    ],
  },
};
