const path = require('path');
const helpers = require('./helpers');
const PATHS = {
    src: helpers.root('src'),
    app: helpers.root('src', 'app.js'),
    vendor: helpers.root('src', 'vendor'),
    build: helpers.root('dist'),
};

module.exports = PATHS;