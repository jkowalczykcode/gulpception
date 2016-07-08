#Basic run

To run the project, run `npm install`, then `gulp`. It will:  

- start the server
- transpile ES6 scripts into browser compatible ES5 scripts
- preprocess LESS files

***other tasks***

`gulp preprocess:less`

Changing all files from src/less directory, preprocessing LESS files to CSS, adding browser-compatible prefixes when needed, concatenating and putting the style.css file in dist/css catalogue.

`gulp preprocess:stylus`

Get stylus files from src/stylus dir, preprocessing them to CSS, concatenating and put in dist/css directory.

`gulp preprocess:less2css`

Doing similar job to preprocess:less but with other plugin.


`gulp transpile:es6`

Transpiling ES5 to ES6 (doesn't handle the modules).

`gulp transpile:browserify`

Transpiling ES5 to ES6 (handles everything; used by default).

`gulp gconnect`

Starts the server, but uses gulp-connect module.

`gulp server:bs`

Starts the server with browserify (used by default). Also, watching files for changes and reacting with transpiling, decompiling immidiately.

`gulp watch-less`

Waiting for changes in LESS files which are located in src/less folder.

`gulp watch-js`

Waiting for changes in JS files which are located in src/js folder (handy in transpiling to es6).

`gulp`

Runs server:bs, transpile:browserify and preprocess:less.

#Running the app

When we need to get to work ES5 (transpiled from ES6) code, we need babel-polyfill dependency to handle that. We have to add:
`<script src="node_modules/babel-polyfill/dist/polyfill.js"></script>`
before our dist script files (dist/js/es6.js).

But babel doesn't handle modules from ES6. The browserify is a tool which can handle it, so in this project the browserify is used as default es5-to-es6 transpiler.

#The Inception // Gulp & ES6 Test project
In this simple project which describing movie, actors and directors. It even has a BWONG sound effect when page loads and when you change subpages! :) That would be enabled in the 

From non-gulp side it uses:

- bootstrap as CSS framework
- jQuery
- please-wait as splashscreen script
- ES6 features
- Youtube API for BWONG Inception trailer sound playing in the background
- filmweb.pl and imdb.com external resources

The application isn't the greatest application in the world but it's here only for showing that gulp's working.

You just run simply by run the command (on the UNIX machine):
`npm install && bower install && gulp`

on Windows:
`npm install
bower install
gulp`

It will download required dependencies, so it take a while, and then translate ES6 to ES5 code and LESS to CSS, then start the server, open your browser. Only that little. :) Oh, and you can run:

`npm run server`

instead of:

`gulp`

It will done the same.


#Common errors

***Error:***
Cannot find module 'jsdoc/util/doop'

***Problem***
 after running some of the `gulp` tasks it throws an error `Cannot find module 'jsdoc/util/doop`. That problem occurs in jsdoc. That version isn't supported right now. The current supported version is jsdoc3.
 
***Solution***
`npm remove gulp-json
npm install gulp-json`
Also, upgrade to jsdoc3.

***Error:***
no error, but wtf is with that sound, dude?

***Problem***
That BWONG sound is annoying. Can i turn it off?

***Solution***
Yes. Just set playerMuted value in src/js/youtube.js file to true.


The whole thing is tested on Ubuntu 16.04 64-bit.