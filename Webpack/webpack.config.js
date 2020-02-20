// node引入模块的方式
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
module.exports = {
    mode:"development", //development|production
    // 入口文件 
    entry:"./src/index.js",
    // 出口文件 打包到哪
    output:{
        filename:"main.js",
        // path是绝对路径 
        path:path.resolve(__dirname,"dist")
    },
    module:{
        rules:[
            {
                test:/\.(jpg|png|gif)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        outputPath:'images/',
                        limit:100,
                        name:'[name].[ext]'
                    }
                }
            },
            {
                test:/\.css$/,
                use:[ //loader的执行顺序从后向前
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test:/\.scss$/,
                use:[ //loader的执行顺序从后向前
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins:[
        // template中的src/indx.html作为模板生成dist目录，并把打包生成的js注入到html中
        new HtmlWebpackPlugin({
            template:"./src/index.html"
        }),
        // 打包之前先将dist目录删除
        new CleanWebpackPlugin()
    ]
}


