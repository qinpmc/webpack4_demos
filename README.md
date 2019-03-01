##  Webpack demos

主要参考资料：   
http://webpack.wuhaolin.cn/

### 1 安装Webpack
 
- 安装最新稳定版
npm i -D webpack

- 安装指定版本
npm i -D webpack@<version>


- 安装 Webpack 到全局
 
npm i -g webpack


### 2 
创建项目结构

mkdir webpack-demo && cd webpack-demo
npm init -y
npm install webpack webpack-cli --save-dev


### 3 Webpack基本使用

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

### 4 Webpack 核心概念：

- Entry：入口，Webpack 执行构建的第一步将从 Entry 开始，可抽象成输入。 
- Module：模块，在 Webpack 里一切皆模块，一个模块对应着一个文件。Webpack 会从配置的 Entry 开始递归找出所有依赖的模块。
- Chunk：代码块，一个 Chunk 由多个模块组合而成，用于代码合并与分割。
- Loader：模块转换器，用于把模块原内容按照需求转换成新内容。
- Plugin：扩展插件，在 Webpack 构建流程中的特定时机注入扩展逻辑来改变构建结果或做你想要的事情。
- Output：输出结果，在 Webpack 经过一系列处理并得出最终想要的代码后输出结果

1. Webpack 启动后会从 Entry 里配置的 Module 开始递归解析 Entry 依赖的所有 Module。   
2. 每找到一个 Module， 就会根据配置的 Loader 去找出对应的转换规则，        
对 Module 进行转换后，再解析出当前 Module 依赖的 Module。   
3. 这些模块会以 Entry 为单位进行分组，一个 Entry 和其所有依赖的 Module 被分到一个组也就是一个 Chunk。     
4. 最后 Webpack 会把所有 Chunk 转换成文件输出。 在整个流程中 Webpack 会在恰当的时机执行 Plugin 里定义的逻辑。    

##### 4.1 Entry
- 代码的入口；打包的入口；一个或多个；

```
module.exports = {
    entry: "index.js"
}

module.exports = {
    entry: ["index.js","vendor.js"]
}

module.exports = {
    entry: {
        index,"vendor.js"   //index 表示一个chunk
    }
}
```
#### 4.2 Output
- 打包成的文件（bundle）； 一个或多个；可以自定规则；可以配合CDN使用；

```
module.exports = {
    entry: "index.js",
    output:{
        filename:"index.min.js"
    }
}


module.exports = {
    entry: {
        index,"vendor.js"   //index 表示一个chunk
        vendor:"vendor.js"
    },
    output:{
        filename: "[name].min.[hash:5].js"
    }


}

```

#### 4.3 Loader
- 处理文件；转换为模块；
- 编译相关（babel-loader、ts-loader) ;样式相关（style-loader、css-loader、less-loader）;文件相关（file-loader、url-loader）
```
module.exports = {

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
#### 4.4 Plugin
- 参与打包整个过程； 打包优化和压缩；配置编译时的变量；
- 优化相关的插件（CommonsChunkPlugin、UglifyjsWebpackPlugin）；功能相关插件（ExtractTextWebpackPlugin、HtmlWebpackPlugin）
```
module.exports = {

  plugins: [new webpack.optimize.UglifyJsPlugin()]
};

module.exports = {

  plugins: [
    new ExtractTextPlugin({
      // 从 .js 文件中提取出来的 .css 文件的名称
      filename: "[name]_[hash:8].css",
    }),
  ]
};

```

























