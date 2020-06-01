const merge = require('webpack-merge');
const base = require('./base.webpack.config.js');
const dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(base, {
    mode: 'production',
    output: {
        filename: './js/[name].[chunkhash].js',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './css/[name].[chunkhash].css',
            chunkFilename: '[id].css',
        }),
        new dotenv({
            path: './prod.env',
        }),
    ],
});