/**
 * Created by lizhong on 2017/11/25.
 */
(function(window){
    let name = '这是我的第一个模块'
    function setTime1(){
        return name.toUpperCase();
    }
    //将模块暴露出去,不然的话外部无法拿到他的值，这是模块化最基础的一步。
    window.module1 = {setTime1};
})(window)


