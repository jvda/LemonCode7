const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const basePath = __dirname;

module.exports = {
  context: path.join(basePath, 'src'), resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  entry: {
    app: ['regenerator-runtime/runtime', './index.tsx', './head.tsx'],
    appStyles: ['./index.scss'],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'all',
          name: 'vendor',
          test: /[\\/]node_modules[\\/]((?!s?css).)*$/,
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|jpg)$/,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 50000,
            name: './img/[hash].[name].[ext]',
            esModule: false,
          }
        }
      },
      {
        test: /\.(svg)$/,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1000,
            mimetype: 'image/svg+xml',
            name: './img/[hash].[name].[ext]',
            esModule: false,
          }
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  plugins: [
    //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html', //Name of file in ./dist/
      template: 'index.html', //Name of template in ./src
    }),
  ],
  
};
