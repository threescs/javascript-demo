/**
 * @name 冒泡排序
 * @param {*} arr 
 */
function bubbleSort(arr) {
  var i = 0,
    j = 0,
    temp = 0
  for (i = 1; i < arr.length; i++) {
    for (j = 0; j <= arr.length - i; j++) {
      // ">" 从小到大排序
      // "<" 从大到小排序
      //比较右边的数  如果大于本身 就交换位置
      if (arr[j] > arr[j + 1]) {
        //用temp 来保存 之前的数
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}


console.log(bubbleSort([1, 2, 4, 7, 3]));

/**
 * 
 * @param {*} arr 数组 
 * @param {*} desc true 降序 false 升序
 */
const mySort = (arr, desc = false) => {
  let [i, j, temp] = [0, 0, 0]
  let len = arr.length
  for (i = 1; i < len; i++) {
    for (j = 0; j <= len - i; j++) {
      if (desc ? arr[j] < arr[j + 1] : arr[j] > arr[j + 1]) {
        temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

// console.log(mySort([2, 5, 1, 3, 4], true));  //[ 5, 4, 3, 2, 1 ]
// console.log(mySort(["2", "3", "1", "9", 4], false));  //[ '1', '2', '3', 4, '9' ]

/**
 * 函数式编程的排序
 * 实现 Array.prototype.sort 一样的效果
 * @param {*} arr 
 */
const sort = (arr, fn) => {
  let [i, j, temp] = [0, 0, 0]
  const len = arr.length
  const tempArr = [...arr] //用来保存 函数参数
  for (i = 1; i < len; i++) {
    const DESC = fn(tempArr[i - 1], tempArr[i])
    for (j = 0; j <= len - i; j++) {
      if (DESC ? arr[j] < arr[j + 1] : arr[j] > arr[j + 1]) {
        temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

const result = sort([1, 3, 2, 5, 4], (a, b) => a > b)
console.log(result);