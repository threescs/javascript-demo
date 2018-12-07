var arr = [1, 2, 3, 4];

var sum = (a, b) => a + b;
arr.reduce(sum, 0) //10

// map 是 reduce 的特例

var arr = [1, 2, 3, 4];
var handler = function(newArr, x) {
    newArr.push(x + 1)
    return newArr
}

arr.reduce(handler, []); // [2, 3, 4, 5]

var arr = [1, 2, 3, 4];
var plusOne = x => x + 1;
arr.map(plusOne)  //[2, 3, 4, 5]

// 事实上所有的map都可以基于reduce实现

function map (f, arr) {
    return arr.reduce(function (result, x) {
        result.push(f(x));
        return result;
     } ,[]);
}

// reduce本质 就是遍历 变形 累计


// Ramda中
// transduce用法

var arr = [1, 2, 3, 4];
var append = function (newArr, x) {
    newArr.push(x);
    return newArr
}
var plusOne = x => x + 1;
var square = x => x *x;

console.log(R.transduce(
    R.map(R.pipe(plusOne,square)),
    append,
    [],
    arr
))