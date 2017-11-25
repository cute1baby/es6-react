'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var data = 'love you';
function foo() {
    console.log('foo');
}
function bar() {
    console.log('bar');
}
var DATA_ARR = exports.DATA_ARR = [1, 3, 5, 1];
//一次暴露的方式
exports.foo = foo;
exports.bar = bar;