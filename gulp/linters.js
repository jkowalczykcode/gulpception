var gulp = require('gulp'),
    eslint = require('gulp-eslint'),
    jshint = require('gulp-jshint');

module.exports = {
    esLint: function() {
        // console.log('yo');
        return gulp.src(['src/js/*.js','!node_modules/**'])
        // eslint() attaches the lint output to the "eslint" property
        // of the file object so it can be used by other modules.
        .pipe(eslint(
            {
                env: {
                    es6: true
                }
            }
        ))
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError());
    },
    esLintAdvanced: function() {
        gulp.src(['src/js/*.js','!node_modules/**'])
            .pipe(eslint({
                extends: 'eslint:recommended',
                ecmaFeatures: {
                    'modules': true
                },
                rules: {
                   // 'my-custom-rule': 1, heheh
                    'strict': 2
                },
                globals: {
                    'jQuery':false,
                    '$':true
                },
                envs: [
                    'browser','es6'
                ]
            }))
            .pipe(eslint.format())
                // To have the process exit with an error code (1) on
                // lint error, return the stream and pipe to failAfterError last.
                .pipe(eslint.failAfterError());
            // .pipe(eslint.formatEach('compact', process.stderr));
    },
    jsHint: function() {
        return gulp.src('src/js/*.js')
            .pipe(jshint(
                {esversion: 6}))
            .pipe(jshint.reporter('default'));
    }
};
