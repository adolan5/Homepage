/**
 * Webpack configuration.
 * Defines how JavaScript is bundled by webpack, as well as
 * development server options.
 */

const path = require('path');

module.exports = {
    // What is the starting point of our app?
    entry: './src/index.js',
    // What mode are we running our app in?
    mode: 'development',

    // The module section defines how we load/transcompile different files,
    // via 'loaders'.
    // The test field defines which files are matched.
    module: {
        rules: [
            // First rule is for JavaScript/React components.
            {
                test: /\.js$/,
                exclude: /node_modules/,
                // Babel is a transcompiler for JavaScript, to turn it into
                // backwards-compatible syntax.
                // See .babelrc for more babel settings
                loader: 'babel-loader'
            },
            // The next rule is for CSS items. We are using less as a
            // CSS preprocessor, and then style-loader as a means to actually
            // insert generated CSS into our webpage.
            {
                test: /\.less$/,
                // Notice how we used 'loader' in the rule above; that's because
                // we weren't using an array of loaders, as we are doing here
                use: [ 'style-loader', 'css-loader', 'less-loader' ]
            }
        ]
    },

    // The output section defines where the bundled JavaScript actually goes.
    // In this case, it will all be put into a single file, located at
    // public/dist/bundle.js
    output: {
        // path is the absolute location of the bundle
        path: path.resolve(__dirname, 'public/dist'),
        // publicPath is the logical location of application assets, relative
        // to the server root address.
        publicPath: 'public/dist',
        filename: 'bundle.js'
    },

    // The configuration settings for the development server
    devServer: {
        // contentBase is where to serve static files from
        contentBase: path.join(__dirname, 'public/'),
        port: 8080,
        // publicPath is where the bundled files will be available in
        // the browser during server runtime
        publicPath: '/dist/'
    }
};
