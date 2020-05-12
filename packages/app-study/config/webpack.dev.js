
const webpackConfigCreator = require('./webpack.common');
const merge = require('webpack-merge');
const path = require('path');

const config = {
    output: {
        filename: "js/[name][hash].js",
    },
    // 在打包后的文件中，如果出现异常，
    // 堆栈追踪异常不能定位到打包前的单个文件，
    // 所以使用source-map。
    // 官方推荐开发模式下使用inline-source-map, 生产模式使用source-map
    devtool: "inline-source-map",
    devServer: {
        contentBase: path.join(__dirname, "../dist"),
        hot: true
    }
}

const options = {
    mode: "development"
}

module.exports = merge(webpackConfigCreator(options), config);
