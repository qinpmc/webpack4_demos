const path = require('path');
let HtmlWebpackPlugin = require("html-webpack-plugin");
let MiniCssExtractPlugin = require("mini-css-extract-plugin");
 

module.exports = {
  // JS 执行入口文件
  entry: './main.js',
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: 'bundle.js',
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
		test: /\.less$/,// 增加对 less文件的支持
		use: [MiniCssExtractPlugin.loader,'css-loader','postcss-loader','less-loader'],
      },
	  {
		  test: /\.css$/,
		  use:[
			MiniCssExtractPlugin.loader,
			'css-loader',
			'postcss-loader',
		  ]
	  }
    ]
  },
  	plugins:[
        new HtmlWebpackPlugin({
            template:"./index.html",
            filename:"index.html",
            minify:{
                removeAttributeQuotes:true, // 删除引号
                collapseWhitespace:true  //折行
            }
        }),
		new MiniCssExtractPlugin({
			  filename: "[name].css",
			  chunkFilename: "[id].css"
		}) 
    ],
	    devServer:{
        port:3000,
        progress:true , //开启进度
        contentBase:"./build", // 运行目录，
        compress:true
    },
};
