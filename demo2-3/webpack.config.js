const path = require('path');
const webpack = require('webpack')

const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    mode: "production",
    entry: {
        first: './src/first.js',
        second: './src/second.js'
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
    ],
	
    optimization: {
        minimize: true,
        splitChunks: {
            chunks: "all",  //  async
            minSize: 20000,
            automaticNameDelimiter: '~',
        }
    },
};