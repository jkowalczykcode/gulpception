var gulp = require('gulp'),
    __tasksdir = __dirname + '/gulp/',
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    connect = require('gulp-connect'),
    runSequence = require('run-sequence');
    watchers = require('./watchers');

function watchAll() {
        gulp.watch(['index.html'], reload);
        gulp.start('watch:js', reload);
        gulp.start('watch:less', reload);
}

module.exports = {
    browserSync: function() {
        // console.log('hello');
        browserSync({
            notify: false,
            // Customize the Browsersync console logging prefix
            logPrefix: 'LOG',
            open: true, // default value - pops new tab in the browser everytime gulp serve is running
            logFileChanges: true,
            // Allow scroll syncing across breakpoints
            scrollElementMapping: ['#scrolltome'],
            server: ['.'],
            port: 3000
        });
        watchAll();
    },
    browserSyncNoNewTab: function() {
        browserSync({
            open: false,
            server: ['.'],
            port: 3000
        });
        watchAll();
    },
    gulpConnect: function() {
        connect.server({
            root: '.',
            livereload: true,
            port: 5000
        });
    }
}