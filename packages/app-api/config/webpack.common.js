const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

function webpackCommonConfigCreator(options) {

    return {
        mode: options.mode, // 开发模式
        entry: "./src/index.js",
        output: {
            // filename: "bundle.js",
            // 分配打包后的目录，放于js文件夹下
            filename: "js/bundle.js",
            path: path.resolve(__dirname, "../build")
        },
        plugins: [
            // new HtmlWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, "../public/index.html")
            }),
            new CleanWebpackPlugin({
                cleanOnceBeforeBuildPatterns: [path.resolve(process.cwd(), "build/"), path.resolve(process.cwd(), "dist/")]
            }),
            new ExtractTextPlugin({
                // filename: "[name][hash].css"
                // 分配打包后的目录，放于css文件夹下
                filename: "css/[name][hash].css"
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    include: path.resolve(__dirname, "../src"),
                    use: [
                        {
                            loader: "babel-loader",
                            options: {
                                presets: ['@babel/preset-react'],
                                plugins: ["react-hot-loader/babel"]
                            }
                        }
                    ]
                },
                {
                    // test: /\.css$/,
                    test: /\.(css|scss)$/,
                    include: path.resolve(__dirname, '../src'),
                    // use: ["style-loader", "css-loader"]
                    // use: ["style-loader", "css-loader", "sass-loader"]
                    // 配置css-module模式（样式模块化），这里的样式模块化只是动态生成内联样式，即f12可以看到再 <head>标签内有<style>xxx</style>
                    // use: [
                    //     "style-loader",
                    //     {
                    //         loader: "css-loader",
                    //         options: {
                    //             modules: {
                    //                 mode: "local",
                    //                 localIdentName: '[path][name]_[local]--[hash:base64:5]'
                    //             },
                    //             localsConvention: 'camelCase'
                    //         }
                    //     },
                    //     "sass-loader"
                    // ]
                    // 进一步优化 配置css-module模式（样式模块化），将自动生成的样式抽离到单独的文件中
                    use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: [
                            {
                                loader: "css-loader",
                                options: {
                                    modules: {
                                        mode: "local",
                                        localIdentName: '[path][name]_[local]--[hash:base64:5]'
                                    },
                                    localsConvention: 'camelCase'
                                }
                            },
                            "sass-loader",
                            // 使用postcss对css3属性添加前缀
                            {
                                loader: "postcss-loader",
                                options: {
                                    ident: 'postcss',
                                    plugins: loader => [
                                        require('postcss-import')({ root: loader.resourcePath }),
                                        require('autoprefixer')()
                                    ]
                                }
                            }
                        ]
                    })
                },
                // 为第三方包配置css解析，将样式表直接导出
                {
                    test: /\.(css|scss)$/,
                    exclude: path.resolve(__dirname, '../src'),
                    use: [
                        "style-loader/url",
                        {
                            loader: 'file-loader',
                            options: {
                                name: "css/[name].css"
                            }
                        }
                    ]
                },
                // 字体加载器 （前提：yarn add file-loader -D）
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    use: ['file-loader']
                },
                // 图片加载器 （前提：yarn add url-loader -D）
                {
                    test: /\.(jpg|png|svg|gif)$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 10240,
                                // name: '[hash].[ext]',
                                // 分配打包后的目录，放于images文件夹下
                                name: 'images/[hash].[ext]',
                            }
                        },
                    ]
                },
            ]
        }
    }
}

module.exports = webpackCommonConfigCreator;