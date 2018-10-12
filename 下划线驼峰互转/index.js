/**
 * 下划线驼峰互转
 */
const name = 'shang_cheng_shuai';
//下划线 => 驼峰
const toHump = (name) => name.replace(/_(\w)/g,(_,b )=> b.toUpperCase());

console.log(toHump(name))
console.log(toHump("user_name"))

//驼峰 => 下划线
const toUnderLine = (name)=> name.replace(/([A-Z])/g,(_,b)=> `_${b.toLowerCase()}`)

console.log(toUnderLine("shangChengShuai"));
console.log(toUnderLine("userName"));
