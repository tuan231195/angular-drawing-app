var webpackConfig = require('./webpack.test');

module.exports = function (config) {
    const _config = {
        basePath: '',

        frameworks: ['jasmine'],

        files: [
            '../src/app.js',
            '../node_modules/angular-mocks/angular-mocks.js',
            '../src/**/*.spec.js'
        ],
        preprocessors: {
            // add webpack as preprocessor
            '../src/app.js': ['webpack'],
            '../src/**/*.spec.js': ['webpack']
        },
        webpack: webpackConfig,

        webpackMiddleware: {
            stats: 'errors-only'
        },

        webpackServer: {
            noInfo: true
        },

        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        browsers: ['Chrome'],
    };

    config.set(_config);
};
