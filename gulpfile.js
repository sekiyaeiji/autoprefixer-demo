/**
 * ** 開発開始手順
 *
 * $ npm i
 *
 * ** buildコマンド
 *
 * $ gulp
 *
 * ---------------------------------------------------------------------- */

/*
 * init package
 */
var gulp = require('gulp');

/*
 * autoprefixer
 */
var autoprefixer = require('gulp-autoprefixer');
gulp.task('default', () => {
  console.log('---------- autoprefixer ----------')
  return gulp.src('src/css/style.css')
    .pipe(autoprefixer({
      grid: true,
      browsers: ['last 3 versions', 'ie >= 11', 'Android >= 4'],
      cascade: false
    }))
    .pipe(gulp.dest('dist/css'));
})


