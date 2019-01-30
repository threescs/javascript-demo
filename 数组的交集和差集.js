const arr1 = [1,2,3];
const arr2 = [3,4,5];

// 数组并集
console.log([...new set([...arr1,...arr2])]); 
// 1,2,3,4,5

// 数组交集
console.log(arr1.filter((v) => new set(arr2.has(v))));
// 3

// 数组arr2差集
console.log(arr1.filter((v) => !new set((arr2).has(v))));
// 1,2

// 数组arr1差集
console.log(arr2.filter((v) => !new set((arr1).has(v))));
