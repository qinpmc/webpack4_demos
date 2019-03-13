const path = require('path');

module.exports = {
  // JS 执行入口文件---多个入口 示例
  entry: {
    bundle1: './main1.js',
    bundle2: './main2.js'
  },
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: '[name].js',
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './dist'),
  } 
};
