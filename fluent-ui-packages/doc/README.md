通用的 package.josn 配置  
（其中的依赖项是一些基础依赖项，每次这里添加一个新package组件的时候，都可以直接复制粘贴，方便使用）
```json
{
  "name": "@family-ui/nav-flt",
  "version": "0.0.812",
  "description": "> TODO: description",
  "author": "microler <3517340973@qq.com>",
  "homepage": "",
  "license": "MIT",
  "main": "lib/index.js",
  "directories": {
    "src": "src",
    "lib": "lib",
    "test": "__tests__"
  },
  "files": [
    "lib"
  ],
  "publishConfig": {
    "access": "public"
  },
  "repository": {
    "type": "git",
    "url": "https://gitee.com/starFromGithub/family-ui-webpack.git"
  },
  "scripts": {
    "test": "echo \"Error: run tests from root\" && exit 1",
    "build": "rollup -c ../config/rollup.config.js",
    "build:prod": "SET NODE_ENV=production && rollup -c ../config/rollup.config.js",
    "build:dev": "SET NODE_ENV=development && rollup -c ../config/rollup.config.js"
  },
  "dependencies": {
    "@babel/cli": "^7.8.4",
    "@babel/core": "^7.9.6",
    "@babel/plugin-external-helpers": "^7.8.3",
    "@babel/polyfill": "^7.8.7",
    "@babel/preset-env": "^7.9.6",
    "@babel/preset-react": "^7.9.4",
    "@fluentui/react": "^7.110.5",
    "babel-loader": "^8.1.0",
    "babel-plugin-transform-object-rest-spread": "^6.26.0",
    "babel-preset-flow": "^6.23.0",
    "cssnano": "^4.1.10",
    "eslint-plugin-react": "^7.19.0",
    "node-sass": "^4.14.1",
    "postcss-cssnext": "^3.1.0",
    "postcss-import": "^12.0.1",
    "postcss-loader": "^3.0.0",
    "postcss-nested": "^4.2.1",
    "postcss-url": "^8.0.0",
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "rollup": "^2.7.6",
    "rollup-plugin-babel": "^4.4.0",
    "rollup-plugin-clear": "^2.0.7",
    "rollup-plugin-commonjs": "^10.1.0",
    "rollup-plugin-eslint": "^7.0.0",
    "rollup-plugin-filesize": "^8.0.2",
    "rollup-plugin-flow": "^1.1.1",
    "rollup-plugin-image": "^1.0.2",
    "rollup-plugin-json": "^4.0.0",
    "rollup-plugin-node-resolve": "^5.2.0",
    "rollup-plugin-peer-deps-external": "^2.2.2",
    "rollup-plugin-postcss": "^3.1.1",
    "rollup-plugin-react-svg": "^3.0.3",
    "rollup-plugin-replace": "^2.2.0",
    "rollup-plugin-sass": "^1.2.2",
    "rollup-plugin-scss": "^2.4.0",
    "rollup-plugin-uglify": "^6.0.4",
    "rollup-plugin-url": "^3.0.1",
    "sass-loader": "^8.0.2",
    "styled-components": "^5.1.0"
  }
}

```