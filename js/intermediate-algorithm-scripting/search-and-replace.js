/**
 * myReplace
 * @param {String} str : Target for search
 * @param {String} before: Criterion for search
 * @param {String} after: Replacement
 * @return {String}
 */
const myReplace = (str,before,after) => {
    const searchRegex = new RegExp(before, 'g');

    let match = str.match(searchRegex);
    let replacement = after.split("");

    if (/[A-Z]/.test(match[0].charAt(0)) === true && /[A-Z]/.test(after[0]) === false) {
        replacement[0] = replacement[0].toUpperCase();
    }
    return str.replace(before,replacement.join(""));
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"))
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"))
console.log(myReplace("His name is Tom", "Tom", "john"))
