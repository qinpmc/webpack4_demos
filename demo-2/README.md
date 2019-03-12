##  Webpack demos

Webpack 把一切文件看作模块，CSS 文件也不例外.
Webpack不原生支持解析 CSS 文件。要支持非 JavaScript 类型的文件，需要使用 Webpack 的 Loader 机制。
Loader 可以看作具有文件转换功能的翻译员，配置里的 module.rules 数组配置了一组规则，    
告诉 Webpack 在遇到哪些文件时使用哪些 Loader 去加载和转换。 
如上配置告诉 Webpack 在遇到以 .css 结尾的文件时先使用 css-loader 读取 CSS 文件，    
再交给 style-loader 把 CSS 内容注入到 JavaScript 里。

在配置 Loader 时需要注意的是：  
- use 属性的值需要是一个由 Loader 名称组成的数组，Loader 的执行顺序是由后到前的；    
- 每一个 Loader 都可以通过 URL querystring 的方式传入参数，   
例如 css-loader?minimize 中的 minimize 告诉 css-loader 要开启 CSS 压缩.       
 
### 1 Webpack.config.js说明

 
```
const path = require('path');

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
    /*
	rules: [
      {
        // 用正则去匹配要用该 loader 转换的 css 文件
        test: /\.css$/,
        use: [{loader:'style-loader'}, 
		{loader:'css-loader',
			options:{camelCase:true}
		}],
      }
    ]*/
	rules: [
      {
        // 用正则去匹配要用该 loader 转换的 css 文件
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      }
    ]
  }
};

```












