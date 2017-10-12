"use strict";

import gulp from 'gulp';
import babel from 'gulp-babel';
import sourcemaps from 'gulp-sourcemaps';
import transpile from 'gulp-es6-module-transpiler';

gulp.task('build', function () {
  return gulp.src('./index.js')
    .pipe(sourcemaps.init())
    .pipe(transpile({
      formatter: 'bundle'
    }))
    .pipe(babel({
      presets: ["env"]
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist'));
});
