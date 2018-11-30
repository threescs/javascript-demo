/**
 * @description js如何使用函数式编程编写一个数组初始化 内容:空字符串
 */

 let arr = function(i, str) {
     return new Array(i).fill(str || '')
 }(1000, "")

 console.log(arr) 

 /**
  * @description js 
  */