var gulp = require('gulp'),
	concatJs = require('gulp-concat');


gulp.task('concat', function () {
  return gulp.src([
  	'./public/js/Helper.js',
  	'./public/js/App.js',
  	'./public/js/_block/*.js'
  	])
    .pipe(concatJs("bundle.min.js"))
    .pipe(gulp.dest('./public/prodaction/'));
});