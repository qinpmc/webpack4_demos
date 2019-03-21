const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    mode: "production",
    entry: {
        english: "./src/english.js",
        math: "./src/math.js",
        chinese: "./src/chinese.js",
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new CleanWebpackPlugin(['dist'])
    ],
    optimization: {
        minimize: false, // 默认true 压缩
        splitChunks: {
            chunks: "all",  //  async
            minSize: 1,
			maxInitialRequests:3,
            automaticNameDelimiter: '~',
        }
    },
};