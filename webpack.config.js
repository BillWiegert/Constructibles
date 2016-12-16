const webpack = require('webpack');

module.exports = {
  entry: './frontend/constructibles.jsx',
  output: {
    path: 'app/assets/javascripts',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx' ]
  },
  plugins: [
     new webpack.DefinePlugin({
       'process.env':{
         'NODE_ENV': JSON.stringify('production')
       }
     }),
     new webpack.optimize.UglifyJsPlugin({
       compress:{
         warnings: false
       }
     })
   ]
};
