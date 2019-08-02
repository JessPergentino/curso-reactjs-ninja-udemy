const { resolve } = require('path')

module.exports = {
  entry: resolve('index.js'),

  output: {
    path: resolve(),
    filename: 'bundle.js'
  },

  module: {
    rules: [{
      test: /\.(txt|jpg|svg|jpeg|png|ico|gif|ttf|woff|woff2)$/,
      use: {
        loader: 'raw-loader'
      }
    }]
  }
}

/** module: {
    rules: [{
      test: /\.(txt|jpg|svg|jpeg|png|ico|gif|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        query: {
          limit: 10000 - Limite de 10k (Padrão) - gera um arquivo - usa o file-loader
        }
      }
    }]
  } */

/** module: {
  rules: [{
    test: /\.(txt|jpg|svg|jpeg|png|ico|gif|ttf|woff|woff2)$/,
    use: {
      loader: 'file-loader',
      query: {
        name: '[path][name]-[hash].[ext]'
      }
    }
  }]
} */