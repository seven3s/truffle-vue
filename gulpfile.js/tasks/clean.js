/**
 * @file build before clean
 *
 * @author huaxia@huar.love
 * 2017-3-13
 */

var gulp = require('gulp');
var del = require('del');
var config = require('../config');

gulp.task('clean', function (cb) {
    return del([
        config.build
    ], cb);
});
