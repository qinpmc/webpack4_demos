本示例演示：打包js 和 css文件，使用 DevServer

实际开发中你可能会需要：

- 提供 HTTP 服务而不是使用本地文件预览；
- 监听文件的变化并自动刷新网页，做到实时预览；
- 支持 Source Map，以方便调试。



安装 DevServer：

npm i -D webpack-dev-server


执行 webpack-dev-server 命令： 

./node_modules/.bin/webpack-dev-server

DevServer 启动的 HTTP 服务器监听在 http://localhost:8080/



由于 DevServer 不会理会 webpack.config.js 里配置的 output.path 属性，
所以要获取 bundle.js 的正确 URL 是 http://localhost:8080/bundle.js，对应的 index.html 应该修改为：

```
<!--导入 DevServer 输出的 JavaScript 文件-->
<script src="bundle.js"></script>

``` 


支持 Source Map
Webpack 支持生成 Source Map，只需在启动时带上 --devtool source-map 参数



