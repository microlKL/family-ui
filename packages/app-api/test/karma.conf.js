const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function (config) {
  config.set({

    // yarn add -D karma-firefox-launcher
    // yarn add -D karma-chorome-launcher
    // browsers: ['PhantomJS','Chrome'], // 'PhantomJS','Chrome','Firefox'
    browsers: ['Chrome'], // 'PhantomJS','Chrome','Firefox'

    singleRun: true,

    frameworks: ['jasmine'],

    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      './unit-test.webpack.js'
    ],

    preprocessors: {
      './unit-test.webpack.js': ['webpack', 'sourcemap']
    },

    reporters: ['spec'],

    plugins: [
      require('karma-webpack'),
      require('karma-jasmine'),
      require('karma-phantomjs-launcher'),
      require('karma-chrome-launcher'),
      require('karma-sourcemap-loader'),
      require('karma-spec-reporter')
    ],

    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        {type: 'locovonly',subdir:'.',file:'lcov.info'},
        {type: 'html', subdir: 'html'}
      ]
    },

    webpack: {
      devtool: 'inline-source-map',
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            // include: path.resolve(__dirname, "../src"),
            // 用排除的方式，除了 /node_modules/ 都让 babel-loader 进行解析，这样一来就能解析引用的别的package中的组件了
            // exclude: /node_modules/,
            exclude: /node_modules/,
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
      // resolve: {
      //   modulesDirectories: [
      //     'components',
      //     'node_modules'
      //   ],
      //   extensions: ['', '.json', '.js']
      // },
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
      },
      plugins: [
        new webpack.NoEmitOnErrorsPlugin()
      ]
    },

    webpackServer: {
      noInfo: true
    }
  })
}
