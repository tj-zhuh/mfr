var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    //devtool: 'source-map',
    entry: __dirname + "/src/mfr.js",//唯一入口文件
    output: {
        libraryTarget: 'umd',
        library: 'mfr',
        path: __dirname + "/dist",//打包后的文件存放的地方
        filename: "mfr.js"//打包后输出文件的文件名
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'src/css/mfr.css' },
            { from: 'src/images/mfrbg.png' },
        ])
    ]
}