#中心思想

    在commonjs的基础上将app.js+mudules下面的各个js+uniq模块打包
    到一个bundle.js文件中,让所有的js只有一个文件（这就是打包合并）


#目录结构

|-js
    |-dist
    |-src
        |-module1.js
        |-module2.js
        |-module3.js
        |-app.js
|-node_modules
|-index.html
|-package.json

#如何使用

1、搭建上面的框架
2、下载browserify(作用是:帮助编译打包)
    全局：（步骤1）npm install browserify -g
    局部：（步骤2）npm install browserify --save-dev
3、定义模块代码
    module1.js,module2.js,module3.js

4、编译打包处理js:
  browserify js/src/app.js -o js/dist/bundle.js
    ------------------- ---- ---------------
将appjs里面所有的js进行编译打包 输出 到bundlejs单独的文件中。
o指的是output(输出)

*****注意：最后代码运行的时候其实不会去读取js/src/module1.js,module2.js.因为所有的js文件都在bundle.js中********


