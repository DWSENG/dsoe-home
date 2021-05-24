/* 
this is the webpack configuration file
this file tells webpack how to bundle the project into a distributable package that can be sent to production
https://webpack.js.org
*/

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// destructuring the current env mode and public path from the config object
const { mode, publicPath } = require('./config')

module.exports = {
  mode: mode || 'development', // either production or development

  resolve: {
    extensions: ['.js', '.jsx', '.json'], // tells webpack what type of file extensions to expect
  },

  // output tells webpack where to put the bundled filesystem
  // in this case, this is telling it to put it in a folder called 'dist' in the root of the project
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: publicPath,
  },

  module: {
    // rules are what you tell webpack to do based on certain file extentions
    rules: [
      // rule 1
      {
        test: /\.jsx?$/, // look for .js or jsx files
        exclude: /node_modules/, // dont look through node modules
        // 'use' tells webpack to use a certain loader to bundle that file
        use: {
          loader: 'babel-loader', // using babel to transpile new js syntax into older syntax to work in more browsers
        },
      },
      // rule 2
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // look for asset files
        /* alt: asset/resources or asset/inline */
        type: 'asset',
      },
    ],
  },

  // defining how the dev server should be configured
  devServer: {
    port: 8000,
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    historyApiFallback: true,
  },

  // initiating the plugins to be used
  plugins: [
    new CleanWebpackPlugin(), // CleanWebpackPlugin cleans the dist folder before each build
    new HtmlWebpackPlugin({
      template: './src/index.html', // use html template in the bundle
    }),
  ],
}
