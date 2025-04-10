

import { Configuration } from 'webpack'
import path from 'path'
/**
 * @type {Configuration} param0 
 */
const config = {
    entry: './src/index.ts',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
    modules: {
        rules: [
            {
                test: '/\.ts$/',
                use: 'ts-loader',
            }
        ]
    }
}

module.exports = config