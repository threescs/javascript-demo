var string = 'abbcbccaad';
// 字典查找法
var obj = {
    a:0,
    b:0,
    c:0,
    d:0
};
for(let i in string) {
    obj[string[i]]++;
}
console.log(obj);