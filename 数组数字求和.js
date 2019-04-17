
// reduce求和
let arr = [1,2,5,3,87,23,2];
function total (total, num) {
    return total + num;
}

console.log(arr.reduce(total));

// eval 执行
function tatalEval (array1) {
    var s = eval(array1.join('+'));
    return s;
}

// for
function tatalFor(array2) {
    let sum = 0;
    for(let i = 0; i < array2.length; i++) {
        sum+=array2[i];
    }
    return sum;
}