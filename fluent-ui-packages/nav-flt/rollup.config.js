import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
import sass from 'rollup-plugin-sass';
import svg from 'rollup-plugin-react-svg';
import { writeFileSync } from 'fs';
import path from 'path';
// import externalHelpers from "@babel/plugin-external-helpers";
 
const external = ['react', 'prop-types'];
const outputTypes = [
  { file: './dist/es/index.js', format: 'es' },
];
 
const tasks = outputTypes.map(output => ({
  input: './src/index.js',
  external,
  output,
  name: 'nav-flt',
  plugins: [
    resolve(),
    filesize(),
    sass({
      output: styles => writeFileSync(path.resolve('./dist', 'index.css'), styles),
      options: {
        importer(url) {
          return url.startsWith('~') && ({
            file: `${process.cwd()}/node_modules/${url.slice(1)}`
          })
        }
      }
    }),
    babel({
      exclude: 'node_modules/**',
      plugins: ['@babel/plugin-external-helpers'],
    }),
    svg()
  ],
}));
 
export default tasks;