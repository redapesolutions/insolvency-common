import copy from 'rollup-plugin-copy';

export default {
  input: 'src/index.js',
  plugins: [
    copy({
      "src/index.d.ts": "build/index.d.ts",
      verbose: true
    })
  ],
  output: [{
    file: 'build/index.umd.js',
    format: 'umd',
    name: 'axcessCommon',
  },
  {
    file: 'build/index.esm.js',
    format: 'es',
  }],
  sourcemap: true
}
