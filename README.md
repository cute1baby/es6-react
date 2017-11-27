# es6-react
这是近期时间学习的结果
#对几种模块化框架文件结构：
> * Commonjs    
  | - modules
    | - module1.js
    | - module2.js
  | - node-modules
  | - app.js
  | - package.json

> * Commonjs_browerify
  |-js
    |-dist
      |-bundle.js
    |-src
      |-module1.js
      |-module2.js
      |-module3.js
      |-app.js
  |-node_modules
  |-index.html
  |-package.json
  
> * AMD_require
    |-js
      |-libs
        |-require.js
      |-modules
        |-alerter.js
        |-dataService.js
      |-main.js
    |-index.html
 index.html如何进行使用？
 ```
 <script type="text/javascript" src="js/lib/require.js" data-main="js/main.js"></script>
 ```
  
> * CMD_require  
    |-js
      |-libs
        |-sea.js
      |-modules
        |-module1.js
        |-module2.js
        |-module3.js
        |-module4.js
        |-main.js
    |-index.html
index.html如何进行使用？
```
<script src="js/libs/sea.js"></script>
<script>
    seajs.use('./js/modules/main')
</script>
``` 

> * es6_require
    |-js
      |-libs
        |-app.js
        |-bundle.js
        |-module1.js
        |-module2.js
        |-module3.js
      |-src
        |-app.js
        |-module1.js
        |-module2.js
        |-module3.js
    |-index.html
    |-.babelrc
    |-package.json
    
    
