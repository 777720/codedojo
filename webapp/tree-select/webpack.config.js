var webpack = require('webpack');
var path = require('path');
var initEntry = require('./initEntry.js');

var config = {
  entry:{},
  module: {
    loaders: [
        {test: /\.(js|jsx)$/,exclude: [/node_modules/],
          loader: 'react-hot',
        },
        {test: /\.(js|jsx)$/,exclude: [/node_modules/],
          loader: 'babel'
        },
        {test: /\.(js|jsx)$/,exclude: [/node_modules/],
          loader: 'eslint'
        },
        {test: /\.css$/, loader: 'style!css'
        },
    ],
  },
  resolve:{
    root:[__dirname,path.resolve(__dirname,'node_modules')],
      extentions: ['','.js', '.jsx'],
  },
  output: {
    path: __dirname + '/assets/',
    publicPath: "/assets/",
    filename: '[name].js'
  },
  devServer:{
      host: '0.0.0.0',
      contentBase: '',
      devtool: 'cheap-module-source-map',
      inline: true,
      port: 8090
  },
  plugins:[
      new webpack.HotModuleReplacementPlugin()
  ]
};

initEntry(config)

module.exports = config;
