var config = {
  entry: './src/index.js', // entry point
  output: {
    filename: 'bundle.js', // place where bundled app will be served
  },
  devServer: {
    contentBase: './src',
    inline: true, // autorefresh
    port: 3000 // development port server
  },
  module: {
       loaders: [
      {
        test: /\.jsx?$/, // search for js files
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'] // use es2015 and react
        }
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
module.exports = config;
