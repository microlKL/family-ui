// const webpackConfigCreator = require('../config/webpack.common');
const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = {
    addons: [
        '@storybook/addon-knobs/register',
        '@storybook/addon-actions/register',
        '@storybook/addon-storysource',
        '@storybook/addon-viewport/register',
        '@storybook/addon-backgrounds/register',
        '@storybook/addon-a11y/register',
        // '@storybook/addon-links/register'
    ],
    webpackFinal: async (config, { configType }) => {
        // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
        // You can change the configuration based on that.
        // 'PRODUCTION' is used when building the static version of storybook.

        // Make whatever fine-grained changes you need
        config.module.rules.push({
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
        }, {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            include: path.resolve(__dirname, '../'),
        });

        // Return the altered config
        return config;
        // return webpackConfigCreator
    },
};