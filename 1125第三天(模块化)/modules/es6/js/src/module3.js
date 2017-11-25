export function fn3(){
    console.log('这是一个新构建的工具');
}
export default {
    name:'lizhong',
    getName(){
        console.log(this.name);
    }
}