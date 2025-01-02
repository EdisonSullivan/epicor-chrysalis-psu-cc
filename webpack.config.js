var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');

module.exports = (env) => {
  const isDev = env == 'development' || env == 'isolated';

  return {
    entry: {
      'chy' : __dirname + '/index.js'
    },
    output: {
      library: "CHY",
      libraryTarget: "var",
      path: BUILD_DIR,
      filename: isDev ? '[name].bundle.js' : '[name].[hash].bundle.js',
      sourceMapFilename: '[name].[hash].bundle.map',
      publicPath: "/"
    },
    module : {
      rules : [
        { test: /\.(js|jsx)$/, exclude: [/node_modules/, /public/], loader: 'babel-loader'}
      ]
    },
    externals: {
      UniversalDashboard: 'UniversalDashboard',
      'react': 'react',
      'react-dom': 'reactdom'
    },
    resolve: {
      extensions: ['.json', '.js', '.jsx']
    }
  };
}