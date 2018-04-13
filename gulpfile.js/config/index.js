/**
 * @file Global general task configuration
 *
 * @author huaxia@huar.love
 * 2017-3-13
 */

var path = require('path');

var config = {};

var base = path.join(__dirname, '../../');

config.basePath = '';
config.distPath = 'dist';
config.build = base + 'build';

module.exports = config;
