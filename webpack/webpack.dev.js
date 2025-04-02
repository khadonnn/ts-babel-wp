import webpack from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

const config = {
  mode: 'development',
  devServer: {
    hot: true,
    open: true,
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({ 'process.env.name': JSON.stringify('dev') }),
    new ReactRefreshWebpackPlugin(),
  ],
};

export default config;
