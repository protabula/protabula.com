var gulp = require('gulp');
var concat = require('gulp-concat');
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


gulp.task('default', ['scripts']);