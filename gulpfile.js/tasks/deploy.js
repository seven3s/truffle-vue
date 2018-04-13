/**
 * @file gulp compile
 *
 * @author huaxia@huar.love
 * 2017-3-13
 */

const gulp = require('gulp');
const shell = require('gulp-shell');
var gulpSequence = require('gulp-sequence');
gulp.task('reset', gulpSequence('clean', 'compile', 'migrate-deploy', 'start'));
