const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const BUILD_PATH = path.resolve( __dirname, 'build' );
const CONTEXT_PATH = path.resolve( __dirname, 'source' );
const SOURCE_PATH = path.resolve( __dirname, './source/client' );
const STATIC_PATH = path.resolve( __dirname, './source/public' );

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

module.exports = {
    context: CONTEXT_PATH,
    mode: process.env.NODE_ENV || 'development',
    entry: {
        main: SOURCE_PATH + '/index.jsx'
    },
    output: {
        path: BUILD_PATH,
        filename: `[name].[fullhash].js`,
        publicPath: '/',
    },
    devServer: {
        hot: true,
        contentBase: BUILD_PATH,
        compress: true,
        port: 3001,
        open: true,
        host: '0.0.0.0',
        overlay: true,
        historyApiFallback: true,
        useLocalIp: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.s?css$/,
                use: [
                    isDev ? 'style-loader' : {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: BUILD_PATH,
                        },
                    },
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        limit:    8192,
                        name: `images/[name].[fullhash].[ext]`,
                    }
                }
            },
            {
                test: /\.(ttf|woff|woff2|eot)/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[ext]',
                    }
                },
            },
            {
                test: /test\.js$/,
                use: 'mocha-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.png', '.jpg', '.svg']
    },
    devtool: isDev ? 'source-map' : '',
    plugins: [
        new HtmlWebpackPlugin({
            favicon: `${STATIC_PATH}/favicon/favicon.ico`,
            template: STATIC_PATH + '/index.html',
            filename: 'index.html',
            minify: {
                collapseWhitespace: isProd,
            }
        }),
        new MiniCssExtractPlugin({
            filename: `css/[name].[fullhash].css`,
            chunkFilename: `css/[name].[fullhash].css`,
        }),
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false,
        }),
        new Dotenv(),
    ],
}
