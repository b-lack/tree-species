import resolve from '@rollup/plugin-node-resolve'
import ts from "rollup-plugin-ts";
import json from '@rollup/plugin-json'
import pkg from './package.json'
import { terser } from "rollup-plugin-terser";

import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'

const extensions = ['.js', '.jsx', '.ts', '.tsx']
export default [
    // CommonJS (for Node) and ES module (for bundlers) build.
    {
        input: 'src/index.ts',
        output: [
            { // iife
                file: pkg.main,
                format: 'iife',
                name: 'TreeSpecies'
            },
            { // cjs
                file: pkg.module,
                format: 'cjs',
                name: 'TreeSpecies'
            }
        ],
        plugins: [
            ts(),
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