(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Created by lizhong on 2017/11/24.
 */
//接收方法
const module1 = require('./module1');
const module2 = require('./module2');
const module3 = require('./module3');
const uniq = require('uniq');  //数组去重排序的方法
//使用方法
module1.foo();
module2();  //直接调用
module3.foo();
module3.bar();
let coo = module3.coo;
console.log(coo);

//之间通过nodejs把项目跑起来
    //输入node app.js


console.log(uniq(coo));
},{"./module1":2,"./module2":3,"./module3":4,"uniq":5}],2:[function(require,module,exports){
/**
 * Created by lizhong on 2017/11/24.
 */
//module.exports=对象
module.exports={
    foo(){
        console.log('暴露一个对象,包裹着foo1');
    }
}
},{}],3:[function(require,module,exports){
/**
 * Created by lizhong on 2017/11/24.
 */
//module.exports=函数
module.exports=function(){
    console.log('暴露一个函数foo2');
}
},{}],4:[function(require,module,exports){
/**
 * Created by lizhong on 2017/11/24.
 */
//暴露方法
//exports.xxx=函数||对象
exports.foo=function(){
    console.log('暴露一个函数foo');
}
exports.bar=function(){
    console.log('暴露一个函数bar');
}
exports.coo=[2,4,6,8,0,3,5,7,2,4,6];
},{}],5:[function(require,module,exports){
"use strict"

function unique_pred(list, compare) {
  var ptr = 1
    , len = list.length
    , a=list[0], b=list[0]
  for(var i=1; i<len; ++i) {
    b = a
    a = list[i]
    if(compare(a, b)) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique_eq(list) {
  var ptr = 1
    , len = list.length
    , a=list[0], b = list[0]
  for(var i=1; i<len; ++i, b=a) {
    b = a
    a = list[i]
    if(a !== b) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique(list, compare, sorted) {
  if(list.length === 0) {
    return list
  }
  if(compare) {
    if(!sorted) {
      list.sort(compare)
    }
    return unique_pred(list, compare)
  }
  if(!sorted) {
    list.sort()
  }
  return unique_eq(list)
}

module.exports = unique

},{}]},{},[1]);
