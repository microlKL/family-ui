const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

function webpackCommonConfigCreator(options) {

    return {
        mode: options.mode, // 开发模式
        entry: "./src/index.js",
        output: {
            // filename: "bundle.js",
            // 分配打包后的目录，放于js文件夹下
            // filename: "js/bundle.js",
            // 对输出的 bundle.js 进行优化：分割输出，减小体积
            // filename: "js/[name][hash].js", // 改在 webpack.prod.js 和 webpack.dev.js 中根据不同环境配置不同的hash值
            path: path.resolve(__dirname, "../build"),
            publicPath: "/"
        },
        // 对输出的 bundle.js 进行优化：分割输出，减小体积
        optimization: {
            splitChunks: {
                chunks: "all",
                minSize: 50000,
                minChunks: 1,
            }
        },
        plugins: [
            // new HtmlWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, "../public/index.html"),
                // filename: "./../html/index.html", //编译后生成新的html文件路径
                // thunks: ['vendor', 'index'],  // 需要引入的入口文件
                // excludeChunks: ['login'],  // 不需要引入的入口文件
                favicon: path.resolve(__dirname, "../src/assets/images/favicon.ico") //favicon.ico文件路径
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
                    // include: path.resolve(__dirname, "../src"),
                    // 用排除的方式，除了 /node_modules/ 都让 babel-loader 进行解析，这样一来就能解析引用的别的package中的组件了
                    // exclude: /node_modules/,
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
                // {
                //     test: /\.html$/,
                //     use: [
                //         {
                //             loader: 'html-loader'
                //         }
                //     ]
                // },
                // {
                //     test: /\.css$/,
                //     use: [MiniCssExtractPlugin.loader, 'css-loader']
                // },
                {
                    // test: /\.css$/,
                    test: /\.(css|scss)$/,
                    // test: /\.scss$/,
                    // include: path.resolve(__dirname, '../src'),
                    exclude: /node_modules/,
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
                {
                    test: /\.less$/,
                    use: [
                        { loader: 'style-loader' },
                        { loader: 'css-loader' },
                        {
                            loader: 'less-loader',
                            options: {
                                // modifyVars: {
                                //   'primary-color': '#263961',
                                //   'link-color': '#263961'
                                // },
                                javascriptEnabled: true
                            }
                        }
                    ]
                },
                // 为第三方包配置css解析，将样式表直接导出
                {
                    test: /\.(css|scss|less)$/,
                    exclude: path.resolve(__dirname, '../src'),
                    use: [
                        "style-loader",
                        "css-loader",
                        "sass-loader",
                        "less-loader"
                        // {
                        //     loader: 'file-loader',
                        //     options: {
                        //         name: "css/[name].css"
                        //     }
                        // }
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
                                publicPath: "/"
                            }
                        },
                    ]
                },
            ]
        },
        // 后缀自动补全
        resolve: {
            // symlinks: false,
            extensions: ['.js', '.jsx', '.png', '.svg'],
            alias: {
                src: path.resolve(__dirname, '../src'),
                components: path.resolve(__dirname, '../src/components'),
                routes: path.resolve(__dirname, '../src/routes'),
                utils: path.resolve(__dirname, '../src/utils'),
                api: path.resolve(__dirname, '../src/api')
            }
        }
    }
}

module.exports = webpackCommonConfigCreator;