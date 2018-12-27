##  使用插件

    
### 1 安装extract-text-webpack-plugin  

资料上采用如下安装：
npm i -D extract-text-webpack-plugin
运行会出现错误：
Error: Chunk.entrypoints: Use Chunks.groupsIterable and filter by instanceof Entrypoint instead

解决方案（注：此次采用的webpack4版本）： 
npm i -D extract-text-webpack-plugin@next


### 2 webpack.config.js
 
```
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
        use: ExtractTextPlugin.extract({
          // 转换 .css 文件需要使用的 Loader
          use: ['css-loader'],
        }),
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      // 从 .js 文件中提取出来的 .css 文件的名称
      filename: "[name]_[hash:8].css",
    }),
  ]
};

```

**问题**
参考资料中为：filename: "[name]_[contenthash:8].css",
需改成上述：filename: "[name]_[hash:8].css",
否则运行出现： Path variable [contenthash:8] not implemented in this context


  


 












