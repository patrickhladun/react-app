const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public'),
        assetModuleFilename: 'images/[hash][ext][query]'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
       ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/views/index.html",
            filename: "./index.html",
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        port: 3000,
        hot: true
    }
};