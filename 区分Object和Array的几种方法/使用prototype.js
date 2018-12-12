/**
 * 获取类型
 * @param {Any} val
 * @returns {String} 类型 
 */
function getType(val) {
    let valTypeStr = Object.prototype.toString.call(val);
    return valTypeStr.slice(8, valTypeStr.length - 1);
}