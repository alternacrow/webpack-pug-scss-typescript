import path from 'path';
import glob from 'glob';

import { Configuration } from 'webpack';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import PurgeCSSPlugin from 'purgecss-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const PATHS = {
  root: path.resolve(__dirname),
  src: path.resolve(__dirname, 'src'),
  dist: path.resolve(__dirname, 'docs'),
};

module.exports = (env, { mode }): Configuration => {
  const isProd = mode === 'production';
  const publicPath = isProd ? '/webpack-pug-scss-typescript' : '';
  const assetsPath = `${publicPath}/assets`;

  return {
    mode,
    entry: {
      index: path.join(PATHS.src, 'js/index.ts'),
      carousel: path.join(PATHS.src, 'js/carousel.ts'),
      lp: path.join(PATHS.src, 'js/lp.ts'),
      tetris: path.join(PATHS.src, 'js/tetris.ts'),
    },
    output: {
      path: PATHS.dist,
      filename: '[name].[hash].js',
    },
    module: {
      rules: [
        {
          test: /\.pug$/,
          use: [
            {
              loader: 'pug-loader',
              options: {
                pretty: true,
              },
            },
          ],
        },
        {
          test: /\.(sa|sc|c)ss$/i,
          use: [
            isProd
              ? {
                  loader: MiniCssExtractPlugin.loader,
                }
              : {
                  loader: 'style-loader',
                },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                url: false,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                postcssOptions: {
                  plugins: [['autoprefixer', { grid: true }]],
                },
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                additionalData: `$assetsPath: ${assetsPath};`,
              },
            },
            {
              loader: 'import-glob-loader',
            },
          ],
        },
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: {
            loader: 'ts-loader',
          },
        },
      ],
    },
    resolve: {
      alias: {
        '~': PATHS.src,
      },
      extensions: ['.ts', '.js', '.html'],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.join(PATHS.src, 'views/page/index.pug'),
        filename: 'index.html',
        chunks: ['index', 'index.css'],
        publicPath,
        templateParameters: {
          publicPath,
          assetsPath,
        },
      }),
      new HtmlWebpackPlugin({
        template: path.join(PATHS.src, 'views/page/carousel.pug'),
        filename: 'carousel.html',
        chunks: ['carousel', 'carousel.css'],
        publicPath,
        templateParameters: {
          publicPath,
          assetsPath,
        },
      }),
      new HtmlWebpackPlugin({
        template: path.join(PATHS.src, 'views/page/lp.pug'),
        filename: 'lp.html',
        chunks: ['lp', 'lp.css'],
        publicPath,
        templateParameters: {
          publicPath,
          assetsPath,
        },
      }),
      new HtmlWebpackPlugin({
        template: path.join(PATHS.src, 'views/page/tetris.pug'),
        filename: 'tetris.html',
        chunks: ['tetris', 'tetris.css'],
        publicPath,
        templateParameters: {
          publicPath,
          assetsPath,
        },
      }),
      isProd
        ? new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[id].css',
            linkType: 'text/css',
          })
        : () => undefined,
      new PurgeCSSPlugin({
        paths: [...glob.sync(`${PATHS.src}/**/*`, { nodir: true })],
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'src/assets',
            to: 'assets',
          },
        ],
      }),
    ],
    devServer: {
      contentBase: PATHS.dist,
      compress: true,
      port: 9002,
      open: true,
    },
  };
};
