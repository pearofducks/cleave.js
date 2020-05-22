const commonjs = require('rollup-plugin-commonjs');
const {terser} = require('rollup-plugin-terser');

export default {
  input: './src/Cleave.js',
  plugins: [commonjs(), terser()],
  output: {
    file: './dist/cleave-esm.js',
    format: 'esm',
    compact: true
  }
}
