const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './src/application/index.jsx',
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      exclude: [/node_modules/, /\.test\.jsx?$/],
      test: /\.jsx?$/,
      use: [{ loader: 'babel-loader' }],
    }, {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader'],
      }),
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
  },
  plugins: [
    new ExtractTextPlugin({
      filename: './style/style.css',
    }),
  ],
};
