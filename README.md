#重磅知识:react脚手架的安装过程:
```
npm install -g create-react-app
create-react-app hello-world
cd hello-world
npm start（这个不需要对应的npm install下载依赖,一键就能完成）

npm run build
```
--------

# es6-react
这是近期时间学习的结果:

> * util是一个很好的时间格式表示器。

> * vue2.0的mainjs页面格式：
```
import App from './App'
import router from './router'

new Vue({
  el: '#app',  
  router,
  template: '<App/>',
  components: { App }
})
```

#对几种模块化框架文件结构：
> * Commonjs    
```
·
  | - modules
    | - module1.js
    | - module2.js
  | - node-modules
  | - app.js
  | - package.json
·
```

> * Commonjs_browerify
```
·
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
·
```

> * AMD_require
```
·
    |-js
      |-libs
        |-require.js
      |-modules
        |-alerter.js
        |-dataService.js
      |-main.js
    |-index.html
  ·
```
 index.html如何进行使用？
 ```
 <script type="text/javascript" src="js/lib/require.js" data-main="js/main.js"></script>
 ```
  
> * CMD_sea
```
·
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
    ·
```
index.html如何进行使用？
```
<script src="js/libs/sea.js"></script>
<script>
    seajs.use('./js/modules/main')
</script>
``` 

> * es6
```
·
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
  ·
```    
    
