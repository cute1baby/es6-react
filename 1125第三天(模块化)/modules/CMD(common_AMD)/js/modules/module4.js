/**
 * Created by lizhong on 2017/11/25.
 * 此时将module1作为该模块的依赖引过来
 */
//将module2和module3同时引入过来
define(function(require,exports,module){
   //引入依赖模块(同步的方式)
    var module2 = require('./module2'); //引入模块2
    function show(){
        console.log('此时我引入了另外的两个模块:'+ module2.msg);
    }
    exports.show = show;

    //引入依赖模块(异步的方式),是直接调用,猜测正确
    require.async('./module3',function(m3){
        console.log('这是一种异步引入的方式：'+m3.api_key);
    })
})