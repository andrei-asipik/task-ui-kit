import path from 'path';
// const path = require('path');

// console.log(path.resolve(process.cwd(), 'dist'))

export default {
// module.exports = {   
    mode: 'production',
    entry: './src/index.ts',
    output: {
        filename: "index.js",
        // path: path.resolve(__dirname, 'dist'),
        path: path.resolve(process.cwd(), 'dist'),
        libraryTarget: "umd", // Изменено с "umd" на "module"
        clean: true
    },
    // experiments: {
    //     outputModule: true // Включает поддержку ESM
    // },
    resolve: {
        extensions: ['.ts', '.tsx']
    },
    externals: {
        react: 'react'
    },
    module: {
        rules: [
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(ts|tsx)?$/,
                use: ['ts-loader'],
                exclude: /node_modules/
            }
        ],
    }
};