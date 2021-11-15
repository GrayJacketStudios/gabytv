const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: ['ts-loader'],
        include: [
          path.resolve(__dirname, 'src')
        ],
        exclude: /node_modules/,
      }, 
      {
        test: /\.s?[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: [
            path.resolve(__dirname, 'src')
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        exclude: /node_modules/,
        use: ['file-loader?name=[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
      }
    ]
  },
  resolve: {
    extensions: [
      '.ts',
      '.js',
      '.tsx'
    ]
  },
  devServer: {
    hot: true,
    host: 'localhost',
    port: 3000,
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public/dist')
  },
  plugins: [
    // Re-generate index.html with injected script tag.
    // The injected script tag contains a src value of the
    // filename output defined above.
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(__dirname, 'public/index.html'),
      favicon: path.join(__dirname, 'public/favicon.ico')
    }),
  ],
};