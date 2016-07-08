'use strinct';
/**
 * Created by codete on 23.05.16.
 */
var gulp = require('gulp'),
    del = require('del'),
    path = require('path'),
    stripDebug = require('gulp-strip-debug'),
    distDir = 'dist',
    cssSubdir = 'css',
    jsSubdir = 'js',
    cssDistDir = path.join(distDir, cssSubdir),
    jsDistDir = path.join(distDir, jsSubdir),
    jsDocDir = 'doc';


// we don't have to use .. to reach the relative path
module.exports = {
    cleanCss: function() {
        del([cssDistDir]);
    },
    cleanJs: function () {
        del([jsDistDir]);
    },
    cleanDoc: function () {
        del([jsDocDir]);
    },
    cleanAll: function() {
        del(['dist']);
    },
    stripDebug: function() {
        gulp.src('dist/js/*.js')
            .pipe(stripDebug())
            .pipe(gulp.dest('dist'));
    }
};
