const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const { mode, publicPath } = require('./config')

// const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
// const deps = require('./package.json').dependencies

module.exports = {
  mode: mode || 'development',

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: publicPath,
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        /* alt: asset/resources or asset/inline */
        type: 'asset',
      },
    ],
  },

  devServer: {
    port: 8000,
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    historyApiFallback: true,
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
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
  ],
}
