/**
 * @file gulp compile
 *
 * @author huaxia@huar.love
 * 2017-3-13
 */

const gulp = require('gulp');
const shell = require('gulp-shell');
gulp.task('start', shell.task('npm run dev'));
