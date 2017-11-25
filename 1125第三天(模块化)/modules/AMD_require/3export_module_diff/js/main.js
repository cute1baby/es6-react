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
            'jquery': 'lib/jquery-1.10.1',
            'angular': 'lib/angular',
            'angular-messages': 'lib/angular-messages'
        },
        //配置不兼容AMD的模块
        shim: {
            angular: {
                exports: 'angular'
            },
            //exports就是暴露的意思,deps是依赖的意思
            'angular-messages': {
                exports: 'angular-messages',
                deps: ['angular']
            }
        }
    })

    //引入模块使用
    require(['module2','angular','angular-messages'], function (module2,angular) {
        module2.setTime2()
        //angular作为启动模块,不太理解
        angular.module('myApp', ['ngMessages'])
        //启动angular
        angular.bootstrap(document, ['myApp'])
    })
})()



