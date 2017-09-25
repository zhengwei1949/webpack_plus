const webpack = require('webpack')
const path = require('path')
module.exports = {
    entry:path.resolve('./index.js'),
    output:{
        path:path.resolve(__dirname),
        filename:'bundle.js'
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV:'"dev"'
            }
          })
    ]
}