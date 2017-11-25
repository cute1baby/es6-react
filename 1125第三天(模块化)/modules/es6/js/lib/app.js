'use strict';

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _module = require('./module1');

var module1 = _interopRequireWildcard(_module);

var _module2 = require('./module2');

var _module3 = require('./module3');

var _module4 = _interopRequireDefault(_module3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//module3对象里面的函数


(0, _module.foo)(); //把所有暴露出来的内容完全放入module1中去

/* 解构方式*/
/*引入模块*/
/*第三方库,暴露的是$核心函数自己*/

(0, _module.bar)();
console.log(_module.DATA_ARR);
module1.foo();

(0, _module2.foo1)();
(0, _module2.bar1)();
console.log('-----------');
console.log(_module4.default);
_module4.default.getName();
(0, _module3.fn3)();

console.log(_jquery2.default);
(0, _jquery2.default)('html').css('background', 'blue');