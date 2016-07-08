/**
 * Created by codete on 24.05.16.
 */
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    notify = require('gulp-notify');

module.exports = {
    colorTest: function () {
        var a = gutil.colors.underline('this'),
            b = gutil.colors.red('is'),
            c = gutil.colors.yellow('a'),
            d = gutil.colors.magenta('color'),
            e = gutil.colors.green('test'),
            f = gutil.colors.grey('.');
        console.log(a,b,c,d,e,f);
        gutil.log(a, b, c, d, e, f);
        
    },
    notify: notify
}
