/**
 * Created by lizhong on 2017/11/25.
 */
(function () {
    //配置
    require.config({
        //基本路径
        baseUrl: 'js/',
        //映射: 模块标识名: 路径
        paths: {
            //自定义模块
            'module2': 'modules/module2',
            'module1': 'modules/module1',
            //库模块
            'jquery': 'lib/jquery-1.10.1'
        }
    })

    //引入模块使用
    require(['module2'], function (module2) {
        module2.setTime2()
        /*angular.module('myApp', ['ngMessages'])
        //启动angular
        angular.bootstrap(document, ['myApp'])*/
    })
})()



