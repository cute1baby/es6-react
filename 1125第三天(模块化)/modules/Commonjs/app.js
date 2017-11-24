/**
 * Created by lizhong on 2017/11/24.
 */
//接收方法
const module1 = require('./modules/module1');
const module2 = require('./modules/module2');
const module3 = require('./modules/module3');
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