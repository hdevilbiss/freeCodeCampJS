/**
 * fearNotLetter
 * @param {Str} str a range of letters
 * @return {Str} the characters missing from the range
 */
const fearNotLetter = (str) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let returnArr = [];
    let sortedStr = str.split("").sort().join("");
    let filteredAlphabet = alphabet.filter(letter => {
        return letter >= sortedStr[0] && letter <= sortedStr[sortedStr.length - 1]
    });
    console.log(`sortedStr:${sortedStr}`);
    console.log(filteredAlphabet);
    for (let i = 0; i < filteredAlphabet.length; i++) {
        if (filteredAlphabet.indexOf('a') === -1 ) {
            returnArr.push(sortedStr.charAt(i))
        }
    }
    console.log(returnArr);
    return returnArr.length === 0
        ? undefined
        : returnArr;
}

/**
 * Tests for fearNotLetter
 */
let testArr = [];

testArr.push(
    ['abde', 'd'],
    ['abcdefghjklmno','i'],
    ['stvwx','u'],
    ['bcdf','e'],
    ['abcdefghijklmnopqrstuvwxyz',undefined],
    ['fac','bde'],
);

testArr.forEach(([ input, expectedOutput ]) => {
    console.log(`input:${input}`);
    console.log(`result:${fearNotLetter(input) === expectedOutput ? "PASS" : "FAIL"}`);
})


