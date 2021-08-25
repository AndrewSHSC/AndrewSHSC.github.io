var path = require('path');
var webpack = require('webpack');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {

    mode: 'development',
    //mode: 'production',

    // Entry point for webpack
    context: path.join(__dirname, 'src'),
    entry: path.join(__dirname, 'src/index.tsx'),

    // Bundled file output
    output: {

        filename: "whatwedo.js",
        path: path.join(__dirname, "./build")

    },
    devtool: "inline-source-map",

    // File extensions to bundle
    resolve: {
        extensions: [".js", ".ts", ".tsx"],
        alias: {

            "*": path.resolve(__dirname, 'node_modules')

        }
    },

    // Transpiling modules
    module: {

        rules: [

            {

                test: /\.tsx?$/,
                loader: ['cache-loader', "ts-loader"],
                exclude: /node_modules/,
                include: path.join(__dirname, 'src')

            },
            {

                test: /\.less$/,
                loader: ["cache-loader", "style-loader", "css-loader", "less-loader"]

            },
            {

                test: /\.css$/,
                loader: ["cache-loader", "style-loader", "css-loader"]

            }

        ]

    },
    plugins: [


    ],
    externals: {

        "jquery": "$"

    },
    optimization: {
        minimizer: [new UglifyJsPlugin()],
    }

}