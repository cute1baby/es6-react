//将上述所有暴露的模块都拿出来使用
define(function(require){
    var m1 = require('./module1');
    var m4 = require('./module4');
    m1.setTime1();
    m4.show();
})