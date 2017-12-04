#AMD:专门用于浏览器端,模块的加载时异步的。
    定义没有依赖的模块=>define(function(){
        return 模块
    })

#基本语法：
```
    *定义暴露模块：定义有依赖的模块=>
        define(['module1'，'module2'],function(n1,n2){
            return 模块
        })
    *引入使用模块
        require(['module1'，'module2'],function(n1,n2){
            使用 n1/n2
        })
```
#实现(浏览器端)：require.js
