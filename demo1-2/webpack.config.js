const path = require('path');
// const ExtractTextPlugin  = require("extract-text-webpack-plugin")
const miniCssExtractPlugin = require('mini-css-extract-plugin');

// 使用 miniCssExtractPlugin 将css 打包单独文件示例
module.exports = {
  // JS 执行入口文件
  entry: './main.js',
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: 'bundle.js',
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './dist'),
  },
  module:{
	  rules:[
		{
			// 用正则去匹配要用该 loader 转换的 CSS 文件
			test: /\.css$/,
                use: [
                    miniCssExtractPlugin.loader,
					'css-loader'
                ]
		}
	  ] 
  },
  plugins:[
        new miniCssExtractPlugin({
            filename: '[name].[contenthash:8].css'
        })
  ]
};
