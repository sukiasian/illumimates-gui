import path from 'path';
import htmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.(t|j)sx$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            },
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }

        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 3000,
        host: '127.0.0.1',
        open: true
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
            title: 'Illumimates | Welcome',
            filename: 'index.html',
            inject: 'body',
            minify: 'auto'
        })
    ]
};
