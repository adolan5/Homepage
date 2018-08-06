/**
 * Webpack configuration.
 */

const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'development',

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.less$/,
                use: [ 'style-loader', 'less-loader' ]
            }
        ]
    },

    output: {
        path: path.resolve(__dirname, 'public/dist'),
        publicPath: 'public/dist',
        filename: 'bundle.js'
    }
};
