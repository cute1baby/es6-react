'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fn3 = fn3;
function fn3() {
    console.log('这是一个新构建的工具');
}
exports.default = {
    name: 'lizhong',
    getName: function getName() {
        console.log(this.name);
    }
};