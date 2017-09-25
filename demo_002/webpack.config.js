const path = require('path')
module.exports = {
    entry:path.resolve('./index.js'),
    output:{
        path:path.resolve(__dirname),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test:require.resolve('zepto'),
                //script-loader 全局上下文环境中执行模块 JS 文件； 
                //exports-loader 添加 module.exports 来主动暴露需要的对象，使其模块化。
                loader: 'exports-loader?window.Zepto!script-loader'
            }
        ]
    }
}