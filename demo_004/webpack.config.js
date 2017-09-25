const path = require('path')
module.exports = {
    entry:path.resolve(__dirname,'index.js'),
    output:{
        path:path.resolve(__dirname),
        filename:'bundle.js'
    },
    module:{
        rules:[
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
}