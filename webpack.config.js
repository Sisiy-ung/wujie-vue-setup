import webpack from 'webpack'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/**
 * @type {webpack.Configuration} param0 
 */
const config = {
    entry: './src/index.ts',
    mode: 'none',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'lib'),
        // 开发库的时候用到
        library: "wujievue",
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    externals: {
        vue: "vue",
        wujie: "wujie",
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'swc-loader',
            }
        ]
    }
}

export default config