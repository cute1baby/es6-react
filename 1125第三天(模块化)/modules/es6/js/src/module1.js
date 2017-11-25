let data = 'love you';
function foo(){
    console.log('foo');
}
function bar(){
    console.log('bar');
}
export const DATA_ARR = [1, 3, 5, 1]
//一次暴露的方式
export {
    foo,bar
}