/**
 * myReplace
 * @param {String} str : Target for search
 * @param {String} before: Criterion for search
 * @param {String} after: Replacement
 * @return {String}
 */
const myReplace = (str,before,after) => {
    const beforeRegex = new RegExp(before,"g");
    let result = str.match(beforeRegex);
    const uppercaseRegex = /[A-Z]/;
    if (uppercaseRegex.test(result[0][0]) == true && uppercaseRegex.test(after[0]) == false) {
        after[0].toUpperCase
    }
    console.log(result,after,after[0].toUpperCase)
    console.log(uppercaseRegex.test(result[0][0]))
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
myReplace("Let us get back to more Coding", "Coding", "algorithms")
myReplace("His name is Tom", "Tom", "john")
