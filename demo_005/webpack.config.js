const path = require('path')
module.exports = {
    entry:path.resolve(__dirname,'index.jsx'),
    output:{
        path:path.resolve(__dirname),
        filename:'bundle.js'
    },
    module:{
        rules:[
            { test: /\.js|jsx$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
}