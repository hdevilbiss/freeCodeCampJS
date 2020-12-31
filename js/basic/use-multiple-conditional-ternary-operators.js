/**
 * checkSign
 * @param {Number} num to check
 */
const checkSign = (num) => !isNaN(parseInt(num)) ? num < 0 ? "negative" : num == 0 ? "zero" : "positive" : "not a number";

console.log(checkSign(10));
console.log(checkSign(-1));
console.log(checkSign(0));
console.log(checkSign("1"))
console.log(checkSign("-1"))
console.log(checkSign("0"))
console.log(checkSign("chicken"))
