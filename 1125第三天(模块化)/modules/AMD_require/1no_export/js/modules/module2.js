/**
 * Created by lizhong on 2017/11/25.
 * 此时将module1作为该模块的依赖引过来
 */
(function(window,module1){
    let name = 'this is Tom';
    function setTime2(){
        alert(module1.setTime1()+',my name is'+name);
    }
    window.module2 = {setTime2};
})(window,module1)