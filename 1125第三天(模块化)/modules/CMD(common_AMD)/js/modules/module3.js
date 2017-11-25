/**
 * Created by lizhong on 2017/11/25.
 * 此时将module1作为该模块的依赖引过来
 */
define(function(require,exports,module){
    const api_key = 'you_you_you';
    exports.api_key = api_key;  //暴露变量
})