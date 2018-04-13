/**
 * @file gulp 默认执行任务
 *
 * @author huaxia@huar.love
 * 2017-3-13
 */

var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');
gulp.task('default', gulpSequence('clean', 'compile', 'migrate', 'start'));
