import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'

export default {
  input: './src/Cleave.js',
  plugins: [commonjs(), terser()],
  output: [
    { file: './dist/cleave.esm.js', format: 'esm', compact: true },
    { file: './dist/cleave.cjs.js', format: 'cjs', compact: true }
  ]
}
