const path = require('path');
const parts = require('./webpack.parts');
const merge = require('webpack-merge');
const PATHS = require('./dir.config');
const helpers = require('./helpers');


const commonConfig = merge([
    parts.baseConfig(),
    parts.lintCSS({include: PATHS.app}),
    parts.lintTypeScript(),
    parts.loadJavaScript({
        exclude: /node_modules/
    }),
    parts.loadLess(),
    parts.loadImages({
        loader: 'url-loader',
        options: {
            limit: 15000,
            name: '[name].[hash:8].[ext]'
        }
    }),
    parts.loadFonts({
        loader: 'file-loader',
        options: {
            name: '[name].[hash:8].[ext]'
        }
    }),
    parts.loadTypeScript(),
    parts.loadHTML(),
    parts.extractBundles([
        {
            name: ['app', 'vendor', 'polyfill']
        },
        {
            name: 'manifest',
            minChunks: Infinity
        }
    ]),
    parts.extractHTML(path.resolve(PATHS.src, 'index.html')),
    parts.loadJQuery()
]);

module.exports = commonConfig;