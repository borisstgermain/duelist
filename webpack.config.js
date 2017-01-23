'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProd = process.env.NODE_ENV === 'prod';

const entry = isProd
    ? './src/js/main.js'
    : [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/js/main.js'
    ];

const plugins = isProd
    ? []
    : [ new webpack.HotModuleReplacementPlugin() ];

plugins.push(new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'src/index.html'
}));

module.exports = {
    entry,
    plugins,
    output: {
        filename: 'bundle.js',
        path: __dirname + '/build',
        publicPath: '/'
    },
    devServer: {
        host: 'localhost',
        port: 8080,
        contentBase: __dirname + '/build',
        hot: true
    }
};
