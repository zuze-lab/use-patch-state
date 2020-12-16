import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

const input = 'index.ts';

const plugins = [typescript({ typescript: require('typescript') })];

export default [
  {
    input,
    external: ['react'],
    output: {
      file: pkg.module,
      format: 'esm',
    },
    plugins,
  },
  {
    input,
    output: {
      file: pkg.main,
      format: 'cjs',
    },
    external: ['react'],
    plugins,
  },
];
