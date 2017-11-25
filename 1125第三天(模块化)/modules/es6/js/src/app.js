/*引入模块*/
/*第三方库,暴露的是$核心函数自己*/
import $ from 'jquery';

import {DATA_ARR} from './module1'; /* 解构方式*/
import {foo,bar} from './module1';
import * as module1 from './module1';  //把所有暴露出来的内容完全放入module1中去

import {foo1,bar1} from './module2';
import lizhong from './module3';
import {fn3} from './module3';   //module3对象里面的函数



foo();
bar();
console.log(DATA_ARR);
module1.foo();

foo1();
bar1();
console.log('-----------');
console.log(lizhong);
lizhong.getName();
fn3();

console.log($);
$('html').css('background','blue');



