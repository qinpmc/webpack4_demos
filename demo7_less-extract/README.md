## SCSS 编译


### 1 环境安装

- Webpack Loader 依赖
 npm i -D  sass-loader css-loader style-loader

- sass-loader 依赖
 npm i -D node-sass

```
"devDependencies": {
    "css-loader": "^2.1.0",
    "node-sass": "^4.11.0",
    "sass-loader": "^7.1.0",
    "style-loader": "^0.23.1",
    "webpack": "^4.28.2",
    "webpack-cli": "^3.1.2"
  },

```
### 2 webpack.config.js 说明

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
        test: /\.scss/,// 增加对 SCSS 文件的支持
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ]
  },
};
```





