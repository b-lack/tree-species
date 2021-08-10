import resolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import pkg from './package.json'
import { terser } from "rollup-plugin-terser";

import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'

const extensions = ['.js', '.ts']
export default [
    // CommonJS (for Node) and ES module (for bundlers) build.
    {
        input: 'src/index.ts',
        output: [
            { // umd
                file: pkg.module,
                format: 'umd',
                name: 'TreeSpecies'
            }
        ],
        plugins: [
            terser(),
            json(),
            resolve({
                browser: true
            }),
            babel({
                exclude: 'node_modules/**',
                extensions
            }),
            commonjs()
        ]
    }
];