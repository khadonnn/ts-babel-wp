import webpack from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
export default {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({ 'process.env.name': JSON.stringify('prod') }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',      // Tạo báo cáo HTML tĩnh
      reportFilename: 'bundle-report.html', // Đặt tên tệp báo cáo
      openAnalyzer: false,         // Tắt tự động mở báo cáo trong trình duyệt
    }),
  ],
}
