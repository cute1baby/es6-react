(function(window){
    var data = 'module1 data';
    function foo(){
        console.log('module_foo:'+data);
        $('body').css('background','red');
    }
    function bar(){
        console.log('module_bar:'+data);
    }
    window.myModule={
        foo,bar
    }
})(window,jQuery)
//(function(window){这里的window传出来是为了能够对其进行压缩。