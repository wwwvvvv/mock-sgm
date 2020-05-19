var path = require('path');

console.log(process.env.NODE_ENV);
var env = process.env.NODE_ENV || 'development';
env = env.toLowerCase();

var file = path.resolve(__dirname, env);
var config = {};
try {
    config = require(file);
    console.log('config is %s', config);
    console.log('load config: [%s] %s', env, file);
} catch(err) {
    console.log('can not load config: [%s] %s', env, file);
    throw err;
}

module.exports = config;