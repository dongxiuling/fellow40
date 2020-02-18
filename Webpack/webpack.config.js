// node引入模块的方式
const path = require("path");
module.exports = {
    // 入口文件 
    entry:"./src/index.js",
    // 出口文件 打包到哪
    output:{
        filename:"bundle.js",
        // path是绝对路径 
        path:path.resolve(__dirname,"dist")
    }
}