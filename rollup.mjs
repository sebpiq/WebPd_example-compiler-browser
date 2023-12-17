import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default [
    // Typescript compilation
    {
        input: 'main.mjs',
        output: {
            file: './docs/webpd-bundle.js',
            format: 'iife',
            sourcemap: false,
            name: 'WebPd',
        },
        plugins: [
            nodeResolve(),
            commonjs(),
        ],
    },
]