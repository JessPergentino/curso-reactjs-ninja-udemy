'use strict'

const path = require('path')
const webpack = require('webpack')

module.exports = {
    devtool: 'source-map',

    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/Client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        path.join(__dirname, 'src', 'index')
    ],
    
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publiPath: '/dist/'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            include: /src/,
            loader: 'babel'
        }]
    }
}