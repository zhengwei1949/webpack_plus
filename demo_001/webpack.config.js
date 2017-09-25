const path = require('path')
module.exports = {
    entry:path.resolve('./index.js'),
    output:{
        path:path.resolve(__dirname),
        filename:'bundle.js'
    }
}