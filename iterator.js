var arr = ['w', 'y', 'k', 'o', 'p'];
var eArr = arr[Symbol.iterator]();
console.log(eArr.next().value);
console.log(eArr.next().value);
console.log(eArr.next().value);
console.log(eArr.next().value);
console.log(eArr.next().value);

for (let letter of eArr) {
    console.log(letter.next().value);
}