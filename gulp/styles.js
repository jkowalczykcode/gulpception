var gulp = require('gulp'),
    gulpCssPreprocessor = require('gulp-css-preprocessor'),
    gulpConcatCss = require('gulp-concat-css'),
    less = require('gulp-less'),
    path = require('path'),
    autoprefixer = require('gulp-autoprefixer'),
    watch = require('gulp-watch');

module.exports = {
    autoprefixer: function(f) {
        gulp.src(f)
            .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
    },
    preprocessLess: function() {
        gulp.src('src/less/*')
        .pipe(gulpCssPreprocessor())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulpConcatCss('style.css'))
        .pipe(gulp.dest('dist/css'));
    },
    stylus: {
        preprocessStylus: function() {
            gulp.src('src/stylus/*')
            .pipe(gulpCssPreprocessor())
            .pipe(gulpConcatCss('style.css'))
            .pipe(gulp.dest('dist/css'));
        },
    },
    less2css: function() {
        return gulp.src('src/less/*.less')
        .pipe(less({
            paths: [ path.join(__dirname) ]
        }))
        .pipe(gulp.dest('dist/css'));
    }

}