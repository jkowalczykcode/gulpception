var gulp = require('gulp'),
	watch = require('gulp-watch'),
    batch = require('gulp-batch');

module.exports = {
	js: function(cb) {
		console.log('watch js');
		gulp.watch('src/js/**/*.js', ['transpile:browserify']);
		cb();
	},
	less: function() {
		// throws an ENOSPC error... sometimes
	    // var lessdir = __dirname + '/../src/less/*.less';
	    // var lessdir = '../src/less/*.less';
	    gulp.watch('src/less/*.less', ['preprocess:less']);
	    // console.log('less changed ', lessdir);
	},
	stylus: {
		watch: function(cb) {
		    watch('src/stylus/*.styl', function (cb) {
		        gulp.start('preprocess:stylus');
		    });
		},
		watchOnce: function(done) {
		    watch('src/stylus/*.styl', batch(function (events, done) {
		        gulp.start('preprocess:stylus', done);
		    }));
		}
	}
}