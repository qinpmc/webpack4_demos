let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    mode:"development",
    entry:"./src/index.js",
    output:{
        filename:"bundle.[hash:8].js",
        path:path.resolve(__dirname,"build")
    },
    devServer:{
        port:3000,
        progress:true , //开启进度
        contentBase:"./build", // 运行目录，
        compress:true
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/index.html",
            filename:"index.html",
            minify:{
                removeAttributeQuotes:true, // 删除引号
                collapseWhitespace:true  //折行
            }
        })
    ]
}