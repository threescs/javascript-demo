/**
 * 自动柯里化
 */

 const curry = (fn) => {
     const _curry = (restNum = 0, args = []) => {
         if(restNum === 0) {
             return fn(...args)
         }
         return (params) => _curry(restNum - 1, [...args, params])
     }
     return _curry(fn.length)
 }
 const test = curry((a, b, c) => a + b + c)
 const test2 = curry((a, b) => a * b)

 console.log(test(1)(2)(3));
 console.log(test2(1)(2));
 console.log(test2(3)(3));