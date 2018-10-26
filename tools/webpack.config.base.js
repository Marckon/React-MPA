const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: path.resolve(__dirname, '..', 'index.js'),
        rca: path.resolve(__dirname, '..', 'pages/redux-counterApp/src/index.js'),
        demo1: path.resolve(__dirname, '..', 'pages/demo1/index.js'),
        mocklearn: path.resolve(__dirname, '..', 'pages/mockjs-learn/src/index.js'),
        onlineShop: path.resolve(__dirname, '..', 'pages/online-shop/src/index.js')
    },
    output: {
        filename: "[name].bundle.js",
        publicPath: "/",
        path: path.resolve(__dirname, '..', 'dist'),
        libraryTarget: "umd"
    },
    devtool: "source-map",
    devServer: {
        contentBase: path.resolve(__dirname, '..'),
        publicPath: "/dist/"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, '..', 'node_modules'),
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: 'css-loader',
                        options:{
                            modules:true,
                        }
                    },
                    {
                        loader:'sass-loader'
                    }
                ]
            }
        ]
    },
    externals: {
        react: {
            root: 'React',
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react'
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom'
        },
        'redux': {
            root: 'Redux',
            commonjs: 'redux',
            commonjs2: 'redux',
            amd: 'redux'
        },
        'react-redux': {
            root: 'ReactRedux',
            commonjs: 'react-redux',
            commonjs2: 'react-redux',
            amd: 'react-redux'
        },
        'antd': {
            root: 'antd',
            commonjs: 'antd',
            commonjs2: 'antd',
            amd: 'antd'
        }
    }
};