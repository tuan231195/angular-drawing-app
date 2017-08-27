const webpack = require('webpack');
const merge = require('webpack-merge');
const helpers = require('./helpers');
const parts = require('./webpack.parts');
const ENV = process.env.NODE_ENV = process.env.ENV = 'test';

module.exports = merge([
	{
		devtool: 'inline-source-map',
		resolve: {
			extensions: ['.js' ]
		}
	},
	parts.loadJavaScript({
        exclude: /node_modules/
    }),
	parts.loadHTML(),
	parts.loadImages({
		loader: 'null-loader'
	}),
	parts.define({
		'process.env': {
			'ENV': JSON.stringify(ENV)
		}
	}),
	parts.loadFonts({
		loader: 'null-loader'
	}),
	parts.loadCSS({
		use: 'raw-loader'
	})
]);

