
/*全局函数的方式:
问题是：global被污染了,很容易造成命名的冲突。*/

    //数据
   var data = 'other_module_data';
   //操作的函数(全局函数)
    function foo(data){
        console.log('这是other_module，foo方法：'+data);
    }
    function bar(data){
        console.log('这是other_module，bar方法：'+data);
    }

