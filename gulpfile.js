const gulp = require('gulp');
const sass = require('gulp-sass')

gulp.task('sass', function(){
    return gulp.src('wwwroot/styles/scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('wwwroot/styles/css/main.min.css'))
});