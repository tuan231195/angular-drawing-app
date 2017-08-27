const webpackDevConfig = require('./config/webpack.dev');
const webpackProdConfig = require('./config/webpack.prod');
module.exports = function (grunt) {
    grunt.initConfig({
        webpack: {
            options: {
                stats: !process.env.NODE_ENV || process.env.NODE_ENV === 'development',
            },
            prod: webpackProdConfig
        },
        "webpack-dev-server": {
            dev: {
                webpack:webpackDevConfig,
                keepalive: true,
                stats: 'minimal'
            }
        },
        watch: {
            webpack: {
                files: ["config/webpack.common.js", "config/webpack.parts.js", "config/webpack.dev.js"],
                tasks: ['webpack-dev-server'],
                options: {
                    spawn: false,
                },
            }
        },
        karma: {
            unit: {
                configFile: './config/karma.conf.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-webpack');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');
    grunt.registerTask('dev', ['webpack-dev-server']);
    grunt.registerTask('prod', ['webpack:prod']);
    grunt.registerTask('test', ['karma']);
    grunt.registerTask('default', ['prod'])
};