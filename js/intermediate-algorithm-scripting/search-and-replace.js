/**
 * myReplace
 * @param {String} str : Target for search
 * @param {String} before: Criterion for search
 * @param {String} after: Replacement (first letter case must match 'before')
 * @return {String}
 */
const myReplace = (str,before,after) => {
    let replacement = after.split("");
    /[A-Z]/.test(before.charAt(0)) === true
        ? replacement[0] = replacement[0].toUpperCase()
        : replacement[0] = replacement[0].toLowerCase();
    return str.replace(before,replacement.join(""));
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"))
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"))
console.log(myReplace("His name is Tom", "Tom", "john"))
console.log(myReplace("I think we should look up there", "up", "Down"))
