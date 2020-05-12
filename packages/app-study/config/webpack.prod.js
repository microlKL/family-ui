
const webpackConfigCreator = require('./webpack.common');
const merge = require('webpack-merge');
const optimizeCss = require('optimize-css-assets-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const config = {
    output: {
        filename: "js/[name][chunkhash].js",
    },
    // 在打包后的文件中，如果出现异常，
    // 堆栈追踪异常不能定位到打包前的单个文件，
    // 所以使用source-map。
    // 官方推荐开发模式下使用inline-source-map, 生产模式使用source-map
    devtool: "source-map",
    plugins: [
        new optimizeCss({
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: { removeAll: true } },
            canPrint: true
        }),
        new ManifestPlugin(),
    ]
}

const options = {
    mode: "production"
}

module.exports = merge(webpackConfigCreator(options), config);
