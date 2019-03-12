本示例演示：打包js 和 css文件,将css文件提取到单独的文件中

Webpack 把一切文件看作模块，CSS 文件也不例外。因为 Webpack 不原生支持解析 CSS 文件。要支持非 JavaScript 类型的文件，需要使用 Webpack 的 Loader 机制。     


```
const path = require('path');
const ExtractTextPlugin  = require("extract-text-webpack-plugin")

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
			use:  ExtractTextPlugin.extract({
				use:["css-loader"]
			})
		}
	  ] 
  },
  plugins:[
	new ExtractTextPlugin({
		filename: "[name]_[hash:8].css"
	})
  ]
};


```

Loader 可以看作具有文件转换功能的翻译员，配置里的 module.rules 数组配置了一组规则，告诉 Webpack 在遇到哪些文件时使用哪些 Loader 去加载和转换。 
如上配置告诉 Webpack 在遇到以 .css 结尾的文件时先使用 css-loader 读取 CSS 文件，再交给 style-loader 把 CSS 内容注入到 JavaScript 里。 

在配置 Loader 时需要注意的是：

- use 属性的值需要是一个由 Loader 名称组成的数组，Loader 的执行顺序是**由后到前**的；
- 每一个 Loader 都可以通过 URL querystring 的方式传入参数，例如 css-loader?minimize 中的 minimize 告诉 css-loader 要开启 CSS 压缩。

 

webpack4 使用  ExtractTextPlugin的几个坑：

1. 安装
npm i -D extract-text-webpack-plugin

运行后报错： 

Error: Chunk.entrypoints: Use Chunks.groupsIterable and filter by instanceof Entrypoint instead
    at Chunk.get (F:\notes\webpack4_demos\demo1-2\node_modules\webpack\lib\Chunk.js:849:9)
    at F:\notes\webpack4_demos\demo1-2\node_modules\extract-text-webpack-plugin\dist\index.js:176:48
    at Array.forEach (<anonymous>)

解决方案： npm i -D extract-text-webpack-plugin@next


2. 继续运行后仍然报错：

TemplatedPathPlugin.js:43
throw new Error(
                                ^

Error: Path variable [contenthash:8] not implemented in this context: [name]_[contenthash:8].css

解决方案：webpack.config.js中的插件改为如下：


  plugins:[
	new ExtractTextPlugin({
		filename: "[name]_[hash:8].css"
	})
  ]

  即 filename: "[name]_[contenthash:8].css" 改为 filename: "[name]_[hash:8].css"

  
  
### 使用mini-css-extract-plugin 替代 extract-text-webpack-plugin@next


```
const path = require('path');
// const ExtractTextPlugin  = require("extract-text-webpack-plugin")
const miniCssExtractPlugin = require('mini-css-extract-plugin');


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

```

  
  