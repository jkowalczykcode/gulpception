var gulp = require('gulp'),
    babel = require('gulp-babel'),
    browserify = require('browserify'),
    fs = require('fs'),
    path = require('path');

// we don't have to use .. to reach the relative path
module.exports = {
    transpileEs6: function() {
        console.log('transpilin');
        return gulp.src(path.join('src','js','*.js'))
            .pipe(babel({
                presets: ['es2015']
            }))
            .pipe(gulp.dest('dist/js'));
    },
    browserify: function() {
        var files = fs.readdirSync('src/js');
        files = files.map(function(file) {
            return file = 'src/js/'+file;
        });

		if (!fs.existsSync('dist')){
			fs.mkdirSync('dist');
		}
		if (!fs.existsSync('dist/js')){
			fs.mkdirSync('dist/js');
		}

        browserify(
            [files]
            )
            .transform("babelify", {presets: ["es2015"]})
            .bundle()
            .pipe(fs.createWriteStream("dist/js/es6.js"));
    }
};
