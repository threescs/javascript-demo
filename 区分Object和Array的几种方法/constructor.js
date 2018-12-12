function subArray() {
//   let obj = {
//         a: 1,
//         b: 3,
//     }
//     return obj;
}
subArray.prototype = [1,2,3];
myArray = new subArray;
console.log(myArray);
console.log(myArray instanceof Object);
console.log(myArray.constructor == Object);

// constructor 是有坑的, 不会共享prototype的
// 记住typeOf 只是返回一个字符串类型的数据类型
