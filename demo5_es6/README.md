## ES6编译

### 1 环境安装

- 1. Webpack 接入 Babel 必须依赖的模块
npm i -D babel-core babel-loader 

- 2. 根据你的需求选择不同的 Plugins 或 Presets
npm i -D babel-preset-env

注意：以上安装的babel-core babel-loader  可能存在版本互相不兼容的问题：
运行webpack过程中发现 babel-loader@8 和 babel/core@6 不兼容。

Error: Cannot find module '@babel/core'
babel-loader@8 requires Babel 7.x (the package '@babel/core'). 
If you'd like to use Babel 6.x ('babel-core'), you should install 'babel-loader@7'.

卸载babel-loader后，安装babel-loader@7：
npm install babel-loader@7   

### 2  webpack.config.js 说明

```
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
        test: /\.js$/,
        use: ['babel-loader'],
      },
    ]
  },
  devtool: 'source-map' // 输出 source-map 方便直接调试 ES6 源码
};
```
