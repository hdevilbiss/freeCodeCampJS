/**
 * fearNotLetter
 * @param {Str} str a range of letters
 * @return {Str} the characters missing from the range
 */
const fearNotLetter = (str) => {
  let returnArr = [];
  let sortedStr = str.split("").sort().join("");
  const filteredAlphabet = "abcdefghijklmnopqrstuvwxyz".split("").filter(letter => {
    return letter >= sortedStr[0] && letter <= sortedStr[sortedStr.length - 1]
  });
  filteredAlphabet.forEach(letter => {
    if (sortedStr.indexOf(letter) === -1) {
      returnArr.push(letter);
    }
  });
  return returnArr.length === 0
    ? undefined
    : returnArr.join("");
}

/**
 * Tests for fearNotLetter
 */
let testArr = [];

testArr.push(
    ['abde', 'c'],
    ['abcdefghjklmno','i'],
    ['stvwx','u'],
    ['bcdf','e'],
    ['abcdefghijklmnopqrstuvwxyz',undefined],
    ['fac','bde'],
);

testArr.forEach(([ input, expectedOutput ]) => {
    console.log(`result:${fearNotLetter(input) === expectedOutput ? "PASS" : "FAIL"}`);
})


