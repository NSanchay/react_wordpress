const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const { readdirSync, existsSync } = require('fs');
module.exports = {
  ...defaultConfig,
  entry: 
    {
      'my_react_plugins':[
        './src/index.js',
        './src/sass/main.scss'
      ]
    },
    output:{
      ...defaultConfig.output,
      path: path.resolve( process.cwd(), './dist/bundle' )
    },
    resolve: {
      extensions: ['.js', '.jsx']
     },
  plugins: [
    ...defaultConfig.plugins,
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false // Enable to remove warnings about conflicting order
    })
  ],
  module: {
    ...defaultConfig.module,
    rules: [
      ...defaultConfig.module.rules,
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
          {
            loader: 'sass-loader', options: { sourceMap: true }
          }
        ],
      },
    ]
  },
};