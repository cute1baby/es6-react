/**
 * Created by lizhong on 2017/11/25.
 * 此时将module1作为该模块的依赖引过来
 */
define(['jquery','module1'],function($,module1){
    let name = 'this is Tom';
    function setTime2(){
        $('body').css('background','red');
        alert(module1.setTime1()+',my name is'+name);
    }
    return {setTime2};
})