import path from 'path';

export default {
    mode: 'production',
    entry: './src/index.ts',
    output: {
        filename: "index.js",
        
        path: path.resolve(process.cwd(), 'dist'),
        libraryTarget: "umd", 
        clean: true
    },
    resolve: {
        // extensions: ['.ts', '.tsx'],
        extensions: ['.ts', '.tsx', '.js', '.scss'],
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
                test: /\.module\.scss$/,
                use: [
                    'style-loader', // добавляет CSS в DOM
                    'css-loader', // обрабатывает CSS файлы
                    'sass-loader', // компилирует SCSS в CSS
                ],
                exclude: /node_modules/,
            },
         {
                test: /\.(ts|tsx)?$/,
                use: ['ts-loader'],
                exclude: /node_modules/
            }
        ],
    }
};