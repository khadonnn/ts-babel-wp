import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
// import CopyPlugin from 'copy-webpack-plugin'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Định nghĩa lại __filename và __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export default {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.png', '.svg'],
    alias: {
      '@': path.resolve(__dirname, '..', './src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
        parser: {
          dataUrlCondition: {
            maxSize: 900 * 1024, // 900KB
          },
        },
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: "src/assets", to: "assets"
    //     },
    //   ],
    // }),
  ],
  stats: 'errors-only',
}
