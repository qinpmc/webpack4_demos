##  Webpack demos

主要参考资料：   
    

### 1 安装Webpack
 
- 安装最新稳定版
npm i -D webpack

- 安装指定版本
npm i -D webpack@<version>


- 安装 Webpack 到全局
 
npm i -g webpack


### 2 Webpack基本使用

```
const path = require('path');

module.exports = {
  // JavaScript 执行入口文件
  entry: './main.js',
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: 'bundle.js',
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './dist'),
  }
};
```












