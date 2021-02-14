const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const { CleanWebpackPlugin } = require("clean-webpack-plugin")
// const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const mode = process.env.NODE_ENV || 'development'
// const deps = require('./package.json').dependencies

module.exports = {
  mode,

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[hash][ext][query]',
    publicPath: 'http://localhost:8000/',
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        /* alt: asset/resources or asset/inline */
        type: 'asset/resources',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          // {
          //   loader: MiniCssExtractPlugin.loader,
          //   // options for importing images in css
          //   options: { publicPath: '' },
          // },
          // 'css-loader',
        ],
      },
    ],
  },

  plugins: [
    // new ModuleFederationPlugin({
    //   name: 'dsoe',
    //   filename: 'dsoeRemote.js',
    //   remotes: {
    //     dsoeUi: 'dsoeUi@http://localhost:8001/dsoeUiRemote.js',
    //   },
    //   exposes: {},
    //   shared: {
    //     ...deps,
    //     react: {
    //       eager: true,
    //       singleton: true,
    //       requiredVersion: deps.react,
    //     },
    //     'react-dom': {
    //       eager: true,
    //       singleton: true,
    //       requiredVersion: deps['react-dom'],
    //     },
    //   },
    // }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],

  devtool: 'source-map',

  devServer: {
    port: 8000,
    // contentBase: path.join(__dirname, "dist"),
    hot: true,
    historyApiFallback: true,
  },
}
