##  Webpack demos

### 1 安装 webpack-dev-server

npm i -D webpack-dev-server


- 1.1实时预览  

Webpack 在启动时可以开启监听模式，开启监听模式后 Webpack 会监听本地文件系统的变化，发生变化时重新构建出新的结果。
Webpack 默认是关闭监听模式的，你可以在启动 Webpack 时通过 webpack --watch 来开启监听模式。

- 1.2 模块热替换

模块热替换能做到在不重新加载整个网页的情况下，通过将被更新过的模块替换老的模块，    
再重新执行一次来实现实时预览。 模块热替换相对于默认的刷新机制能提供更快的响应和更好的开发体验。     
模块热替换默认是关闭的，要开启模块热替换，你只需在启动 DevServer 时带上 --hot 参数  


- 1.3 支持 Source Map

Webpack 支持生成 Source Map，只需在启动时带上 --devtool source-map 参数。


### 2 运行webpack-dev-server  

命令行输入： .\node_modules\.bin\webpack-dev-server --devtool source-map



### 2 Webpack.config.js说明

 
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
 










