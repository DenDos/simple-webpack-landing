'use strict';

var webpack          = require('webpack'),
  ExtractTextPlugin  = require('extract-text-webpack-plugin'),
  path               = require('path'),
  Visualizer         = require('webpack-visualizer-plugin'),
  HtmlWebpackPlugin  = require('html-webpack-plugin')

var opts = {
  app: path.resolve(__dirname, 'app'),
  root:  path.resolve(__dirname, 'app'),
  output_dir: __dirname + '/build',
  output_name: 'bundle.js'
}

var cssAppExtractor = new ExtractTextPlugin('app.css')

module.exports = {
  context: opts.app,
  resolve: {
    root: opts.root
  },
  devServer: {
    headers: { "Access-Control-Allow-Origin": "*" }

  },
  entry: {
    app: ['webpack-dev-server/client','webpack/hot/dev-server', './bootstrap.coffee']
  },
  output: {
    path: opts.output_dir,
    filename: opts.output_name,
    publicPath: '/'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      "window.jQuery": "jquery",
      "jQuery": "jquery"
    }),
    new webpack.HotModuleReplacementPlugin(),
    cssAppExtractor,
    new HtmlWebpackPlugin({
      template: 'index.jade'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.coffee$/, loader: "coffee-loader" },
      { test: /\.(coffee\.md|litcoffee)$/, loader: "coffee-loader?literate" },
      {
        test: /\.jade$/,
        loader: 'jade'
      },
      {
        test: /\.(sass|css|scss)$/,
        loader: cssAppExtractor.extract(['css!postcss-loader','sass!postcss-loader'])
      },
      {
        test: /\.js$/,
        loader: 'ng-annotate!babel?presets[]=es2015!jshint',
        exclude: /node_modules|bower_components/
      },
      {
        test: /\.(ttf|otf|woff|eot|png|jpg|gif|svg)$/,
        loader: 'url-loader?limit=32000'
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(png|jpg|svg|ttf|eof|woff|woff2)$/,
        loader: 'file'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader'
      }
    ]
  }
};
