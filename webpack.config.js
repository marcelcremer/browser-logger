const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.HashedModuleIdsPlugin({
            hashFunction: 'sha256',
            hashDigest: 'hex',
            hashDigestLength: 20
        }),
        new CopyWebpackPlugin([{ from: 'package.publish.json', to: 'package.json' }])
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: 'browser-logger',
        libraryTarget: 'umd',
        chunkFilename: '[id].[chunkhash].js'
    },
    externals: {
        dexie: {
            commonjs: 'dexie',
            commonjs2: 'dexie',
            amd: 'dexie',
            root: '_'
        },
        'json-stringify-safe': {
            commonjs: '"json-stringify-safe"',
            commonjs2: '"json-stringify-safe"',
            amd: '"json-stringify-safe"',
            root: '_'
        }
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }]
    }
};
