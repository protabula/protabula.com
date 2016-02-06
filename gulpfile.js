'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var expect = require('gulp-expect-file');

gulp.task('scripts', function () {

    var files = [
        'node_modules/tether/dist/js/tether.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/holderjs/holder.min.js'
    ];

    return gulp.src(files)
        .pipe(expect(files))
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./assets/js/'));
});

gulp.task('sass', function () {
  return gulp.src('./_sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./_sass/**/*.scss', ['sass']);
});

gulp.task('default', ['scripts', 'sass']);