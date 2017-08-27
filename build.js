var webpack = require('webpack');
var config = require('./webpack.config');
var path = require('path');

config.devtool = undefined;
config.entry = ['./src/index.jsx']
config.output = {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
}

webpack(config).run((err, stats) => {
    if (err) console.error(err);
    else console.log(stats.toString());
});