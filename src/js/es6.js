/*
	SOME ES6 GARBAGE
*/

"use strict";

let containerId = 'scrolltome';

/**
	@param {number} prop1 this is param.
*/
function ClsTest(prop1){
	this.prop1 = prop1
}

/** 
 * @param {Number} x - First number to add.
 * @param {Number} y - Other numbers to add.
 * @type Function
 */
function add(x, ...y) {
    var sum  = x;
    for(var i in y) {
        sum += y[i];
    }
    return sum;
}

var sum1 = add(5,5,5);
var sum2 = add(5,5,5,5);
document.getElementById(containerId).innerHTML += sum1 + '<br />' + sum2 + '<br />';

/*
	This is my class 
*/
export default class Class {
 /**
   * @param {number} prop1 this is param.
   * @return {number} this is return, it returns nothing.
   */
    constructor(prop1) {
        this.prop1 = prop1;
    } 
}

let testOb = new Class('hello');
testOb.prop1 = 'new value';

// Generators
var foo = function* (){
	document.getElementById(containerId).innerHTML += 'yielded start<br />';
	let one = yield 1;
	document.getElementById(containerId).innerHTML += 'yielded 1<br />';
	let two = yield 2;
	document.getElementById(containerId).innerHTML += 'yielded 2<br />';
	const three = yield 3; 
	document.getElementById(containerId).innerHTML += one + two + three + '<br />';
	// throw new Error("Too much yielding...");
};
const genFun = foo();

genFun.next();
genFun.next('x ');
genFun.next('uy ');
genFun.next('z.');

function* fooPromise(){
	document.getElementById(containerId).innerHTML += 'yielded start<br />';
	const one = yield $.get('src/server/friends.js');
	document.getElementById(containerId).innerHTML += 'yielded 1<br />';
	const two = yield $.get('/src/server/index.js');
	document.getElementById(containerId).innerHTML += 'yielded 2<br />';
	const three = yield $.get('/src/server/friends.js');
	$('#'+containerId).append('test gen: ' + one + two + three);
}
const promFun = fooPromise();

promFun.next();
promFun.next();
promFun.next();
promFun.next();

function smartCode(generator) {
	var gen = generator();

	var yieldedVal = gen.next();

	if(yieldedVal.then) {
		yieldedVal(gen.next);
	}
}
smartCode(fooPromise);

genFun.next();

function* a() {
    yield 1;
    yield 2;
    yield 'a';
}

var b = a();
b.next();
b.next();
b.next();

// proxies
const target = {};
const handler = {
	get(target, propKey, receiver) {
		if(receiver || !receiver)
			return 123;
	},
	has(target, propKey) {
		if(propKey || !propKey)
			return true;
	}
};

const proxy = new Proxy(target, handler);

proxy.val ='proxy value';