var gulp = require('gulp'),
    // jsdoc = require('gulp-jsdoc'),
    jsdoc3 = require("gulp-jsdoc3"),
    esdoc = require("gulp-esdoc"),
    yuidoc = require("gulp-yuidoc"),
    documentation = require('gulp-documentation'),
    srcDir = 'src/js/';



module.exports = {
    // deprecated
    // jsDoc: function() {
    //     return gulp.src([srcDir+'*.js'])
    //         .pipe(jsdoc('./doc'));
    // },
    jsDoc3: function(cb) {
        var config = {
          opts: {
            destination: "./doc"
          }
        };

        gulp.src([srcDir+'*.js'])
            .pipe(jsdoc3(config, cb));
    },
    esDoc: function() {
		// document "./src" folder and output at "./docs" folder
		gulp.src([srcDir])
		  .pipe(esdoc({ destination: "./doc" }));    	
    },
    yuiDoc: function() {
        gulp.src(srcDir+"test.js")
            .pipe(yuidoc(gulp.dest("doc")));
          // copy assets
        gulp.src('node_modules/yuidocjs/themes/default/assets/**/*')
           .pipe(gulp.dest('doc/assets'));
    },
    documentationJs: function() {
        gulp.src(srcDir+'*.js')
            .pipe(documentation({ format: 'md' }))
            .pipe(gulp.dest('doc/md'));

        gulp.src(srcDir+'*.js')
            .pipe(documentation({ format: 'html' }))
            .pipe(gulp.dest('doc/html'));

        gulp.src(srcDir+'*.js')
            .pipe(documentation({ format: 'json' }))
            .pipe(gulp.dest('doc/json'));
    }
};
 

