const path = require('path');


// 使用 DevServer
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
			use: ['style-loader', 'css-loader'], // css-loader 读取 CSS 文件，再交给 style-loader 把 CSS 内容注入到 JavaScript 里 
		}
	  ]
	  
  }
};
