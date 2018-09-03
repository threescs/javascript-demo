const str = " 尚 成 帅 "

console.log(str.trim());

String.prototype._trim = function(){
  return this.replace(/\s/g,"")
}

console.log(str._trim());