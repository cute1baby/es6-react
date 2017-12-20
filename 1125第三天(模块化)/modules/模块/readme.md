#将一个复杂的程序依据一定的规则(规范)封装成几个块(文件),并且进行组合在一起
#块的内部数据/实现是私有的,只是向外部暴露一些接口(方法)与外部其他模块进行通信。

模块化的真实作用：
单独的函数名：function run(){}
这样很容易出现函数名命名冲突，影响函数的使用。

函数参数的传递：
```
如果函数参数是复合类型的值（数组、对象、其他函数），传递方式是传址传递（pass by reference）。也就是说，传入函数的是原始值的地址，因此在函数内部修改参数，将会影响到原始值。
举个栗子：
var arr = [2,5];
function Keyth(Arr){
  Arr[0] = 10;
}
Keyth(arr);
console.log(arr[0]);  //此时可以看到数组第一项的结果已经变成了3,说明在函数内部修改这些传址传递的参数会修改该参数的原始值。

但是存在这样一种情况,如果是替换参数的整体内容,那么不会影响原始值，举个栗子:
var arr1 = [2,5];
function Keyth(Arr){
  Arr = [4,7,9,1];
}
Keyth(arr1);
console.log(arr1);   //[2,5],值不发生变化



> * arguments对象：
JavaScript 中每个函数内都能访问一个特别变量 arguments。这个变量维护着所有传递到这个函数中的参数列表。

arguments 对象包含了函数运行时的所有参数，arguments[0]就是第一个参数，arguments[1]就是第二个参数，以此类推。这个对象只有在函数体内部，才可以使用。
举个栗子：
function keith(a, b, c) {
      console.log(arguments[0]); //1
      console.log(arguments[2]); //3
      console.log(arguments.length); //4
  }

  keith(1, 2, 3, 4);
arguments 对象不是一个数组，它是一个类数组对象。因此，无法对 arguments 变量使用标准的数组方法，比如 push, pop 或者 slice。但是可以使用数组中的length属性。

类数组转换成真数组的方法：
var arr = Array.prototype.slice.call(arguments)

```
