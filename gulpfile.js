const gulp = require('gulp');
const minify = require('gulp-minify');
var concat = require('gulp-concat');
const minifyCSS = require('gulp-minify-css');

gulp.task('compose-css', () => {
    return gulp.src('src/app/components/**/*.scss')
        .pipe(minifyCSS())
        .pipe(concat('style.min.scss'))
        .pipe(gulp.dest('dist/css'))
});


  
gulp.task('default', gulp.series(['compose-css']));
