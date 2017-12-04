#暴露模块的语法：
```
module.exports = function(){
    //
}
exports.foo = function(){
  //
}

modules.exports = {'name':'lizhong','age':12}

exports.bar = {
  newFun:function(){
      //。。。
  }
}
```
#引入模块的语法：
```
const module1 = require('./module1.js');
module1();
```
