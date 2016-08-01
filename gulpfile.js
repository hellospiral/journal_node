var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
// var concat = require('gulp-concat');
// var uglify = require('gulp-uglify');
// var utilities = require('gulp-util');
// var del = require('del');
// var jshint = require('gulp-jshint');

// var buildProduction = utilities.env.production;

gulp.task('jsBrowserify', function() {
  return browserify({entries: ['./js/vowelsConsonants-interface.js'] })
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./build/js'));
});
