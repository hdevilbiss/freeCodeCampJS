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

    let newAfter = after.split("");

    console.log(newAfter);

    if (/[A-Z]/.test(match[0].charAt(0)) === true && /[A-Z]/.test(after[0]) === false) {
        newAfter[0] = newAfter[0].toUpperCase();
    }

    newAfter = newAfter.join("");
    console.log(newAfter);

    let newStr = str.replace(before,newAfter);

    console.log(newStr);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
myReplace("Let us get back to more Coding", "Coding", "algorithms")
myReplace("His name is Tom", "Tom", "john")
