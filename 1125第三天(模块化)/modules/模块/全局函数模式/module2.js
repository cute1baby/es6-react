
/*全局函数的方式:
问题是：global被污染了,很容易造成命名的冲突。*/

    //数据
   var data = 'module data';
   //操作的函数(全局函数)
    function foo(){
        console.log('这是module1，other_foo方法：'+data);
    }
    function bar(){
        console.log('这是module1，bar方法：'+data);
    }

