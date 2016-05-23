var path = require('path'),
    libPath = path.join(__dirname, 'app'),
    wwwPath = path.join(__dirname, 'www'),
    pkg = require('./package.json'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'app': path.join(libPath, 'index.ts'),
        'vendors': path.join(libPath, 'vendors.ts')//,
        //'style': path.join(libPath, 'index.scss')
    },
    output: {
        path: __dirname,//wwwPath,
        filename: 'www/[name]-[hash:6].js'
    },
    module: {
        loaders: [{
            test: /\.ts$/,
            loader: 'ts',
            exclude: [
                /node_modules/
            ]
        }, {
            test: /\.json$/,
            loader: "json"
        }, {
            test: /\.html$/,
            loader: 'raw'
        }, {
            test: /\.scss$/,
            loader: "style!css!autoprefixer?browsers=last 2 versions!sass"
        }],
        noParse: [/angular2\/bundles\/.+/],
    },
    resolve: {
        extensions: ['', '.ts', '.js', '.html', '.scss', '.css']
    },
    plugins: [new HtmlWebpackPlugin({
        filename: 'index.html',
        pkg: pkg,
        template: path.join(libPath, 'index.html')
    })]
};
