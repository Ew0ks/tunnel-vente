var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var nunjucks = require('gulp-nunjucks');
var concat = require('gulp-concat');

gulp.task('script', function () {
    return gulp
        .src([
            "node_modules/jquery/dist/jquery.js",
            "node_modules/bootstrap-sass/assets/javascripts/bootstrap/alert.js",
            "node_modules/bootstrap-sass/assets/javascripts/bootstrap/button.js",
            "node_modules/bootstrap-sass/assets/javascripts/bootstrap/collapse.js",
            "node_modules/bootstrap-sass/assets/javascripts/bootstrap/dropdown.js",
            "node_modules/bootstrap-sass/assets/javascripts/bootstrap/dropdown.js",
            "res/script/**/*.js"
        ])
        .pipe(uglify())
        .pipe(concat("script.js"))
        .pipe(gulp.dest('web/'))
        ;
});

gulp.task('template', [], function () {
    return gulp
        .src('res/template/*.html')
        .pipe(nunjucks.compile())
        .pipe(gulp.dest('web/'))
        ;
});

gulp.task('style', function () {
    return gulp
        .src('res/scss/style.scss')
        .pipe(sass({
            "includePaths" : [
                "node_modules/bootstrap-sass/assets/stylesheets",
                "node_modules/font-awesome/scss",
                "node_modules/sass-flex-mixin"
            ]
        }))
        .pipe(gulp.dest('web/'))
        ;
});

gulp.task('assets', [], function () {
    return gulp
        .src('res/assets/**/*')
        .pipe(gulp.dest('web/'))
        ;
});

gulp.task('style:watch', function () {
    gulp.watch('res/scss/**/*.scss', ['style']);
});

gulp.task('template:watch', function () {
    gulp.watch('res/template/**/*.html', ['template']);
});

gulp.task('assets:watch', function () {
    gulp.watch('res/assets/**/*', ['assets']);
});

gulp.task('script:watch', function () {
    gulp.watch('res/script/**/*', ['script']);
});

gulp.task('watch', ['default', 'style:watch', 'template:watch', 'assets:watch', 'script:watch']);
gulp.task('default', ['template', 'style', 'assets','script']);