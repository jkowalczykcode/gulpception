var gulp = require('gulp'),
    __tasksdir = __dirname + '/gulp/',
    styles = require(__tasksdir+'styles'),
    watchers = require(__tasksdir+'watchers'),
    transpile = require(__tasksdir+'transpile'),
    server = require(__tasksdir+'server'),
    clean = require(__tasksdir+'clean'),
    utils = require(__tasksdir+'utils'),
    linters = require(__tasksdir+'linters'),
    doc = require(__tasksdir+'doc');

// one of the approaches
// var requireDir = require('require-dir');
// requireDir('./gulp');
// shortcut for it: require('require-dir')('./gulp');



// preprocess less
gulp.task('preprocess:less', function() {
    styles.preprocessLess();
});

// preprocess stylus
gulp.task('preprocess:stylus', function() {
    styles.stylus.preprocessStylus();
});

// styles 
gulp.task('preprocess:less2css', function() {
    styles.less2css();
});

// watch stylus files and convert them to CSS
gulp.task('watch:stylus', function(cb) {
    watchers.stylus.watch(cb);
});

// watch stylus files and convert them to CSS, reacts only for one change
gulp.task('watch:stylus:onlyonce', function(cb) { // usually the name of cb fun is done
    watchers.stylus.watchOnce(cb);
});

// watch stylus files and convert them to CSS
gulp.task('watch:less', function() {
    watchers.less();
});

// watch src/js for changes
gulp.task('watch:js', ['transpile:browserify'], function(cb) {
    var cb = cb || function(){};
    watchers.js(cb);
});

// watch CSS and JS
gulp.task('watch', ['watch:less', 'watch:js'], function() {
});

// simple transpile from ES5 to ES6 based on babel
gulp.task('transpile:es6', function() {
    transpile.transpileEs6();
});

// transpile with browserify
gulp.task('transpile:browserify', function() {
    transpile.browserify();
});

// server using browserSync
gulp.task('server:bs', function() {
    server.browserSync();
});

// server using browserSync
gulp.task('server:bs:no-new', ['watch:js', 'watch:less'], function() {
    server.browserSyncNoNewTab();
});

// server using connect
gulp.task('server:connect', ['watch:less'], function() {
    server.gulpConnect();
});

// clean js files from dist folder
gulp.task('clean:js', function(){
    clean.cleanJs();
});

// clean css files from dist folder
gulp.task('clean:css', function(){
    clean.cleanCss();
});

// clean documentation files
gulp.task('clean:doc', function(){
    clean.cleanDoc(); 
});

// clean whole dist and documentation folders
gulp.task('clean', ['clean:doc'], function(){
    clean.cleanAll();
});

// erase all console, alert and debug statements from JS code
gulp.task('clean:stripdebug', function(){
    clean.stripDebug();
});

// use ES Lint
gulp.task('es:lint', function(){
    linters.esLint();
});

// use ES Lint
gulp.task('es:lint:advanced', function(){
    linters.esLintAdvanced();
});

// use JSHint
gulp.task('js:hint', function(){
    linters.jsHint();
});

// Documentation using jsdoc (outdated)
gulp.task('doc:jsdoc', function(){
    doc.jsDoc();
});

// Documentation using jsdoc3
gulp.task('doc:jsdoc3', function(){
    doc.jsDoc3();
});

// Documentation using ESDoc
gulp.task('doc:esdoc', function(){
    doc.esDoc();
});

// Documentation using YUIDoc
gulp.task('doc:yuidoc', function(){
   doc.yuiDoc(); 
});

// Documentation using documentationjs
gulp.task('doc:gulpdoc', function(){
   doc.documentationJs(); 
});

// testing gulp.util.color
gulp.task('color:test', function() {
    utils.colorTest();
});

// default task
gulp.task('default', [
    'transpile:browserify',
    'preprocess:less',
    'server:bs'
    ], function () {
    gulp.src("src/js/es6.js")
      .pipe(utils.notify("Server started!"));
});
