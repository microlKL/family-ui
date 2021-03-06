import postcss from "rollup-plugin-postcss";
// import { eslint } from "rollup-plugin-eslint";
import commonjs from "rollup-plugin-commonjs";
// import clear from "rollup-plugin-clear";
// import external from "rollup-plugin-peer-deps-external";
import url from "rollup-plugin-url";

import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import { uglify } from "rollup-plugin-uglify";
import replace from "rollup-plugin-replace";
import json from "rollup-plugin-json";

import nested from "postcss-nested";
import cssnext from "postcss-cssnext";
import scss from 'rollup-plugin-scss';
import cssnano from "cssnano";


const env = process.env.NODE_ENV;

export default {
  input: "src/index.js",
  output: {
    dir: "lib",
    format: "cjs", //  五种输出格式：amd /  es6 / iife / umd / cjs
    sourcemap: true, //生成bundle.map.js文件，方便调试
    exports: "named"
  },
  //告诉rollup不要将此lodash打包，而作为外部依赖
  external: ["react", "react-dom","lodash", "antd","@fluentui/react","styled-components"],
  // 是否开启代码分割
  experimentalCodeSplitting: true,
  plugins: [
    postcss({
      extensions: [".pcss", ".scss",".less", ".css"],
      plugins: [nested(), cssnext({ warnForDuplicates: false }), scss(), cssnano()],
      extract: false // 无论是 dev 还是其他环境这个配置项都不做 样式的抽离
    }),
    url(),
    babel({
      exclude: ["node_modules/**"]
    }),
    resolve(),
    commonjs({
      include: ["node_modules/**"]
    }),
    json(),
    // eslint({
    //   include: ["src/**/*.js"],
    // // exclude: ["src/styles/**"]
    // // exclude: ["src/*"]
    // }),
    replace({
      "process.env.NODE_ENV": JSON.stringify(env)
    }),
    env === "production" && uglify()
  ]
};