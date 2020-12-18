/**
 * fearNotLetter
 * @param {Str} str a range of letters
 * @return {Str} the characters missing from the range
 */
const fearNotLetter = (str) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let returnArr = [];
  let sortStrToArr = str.split("").sort().join("");
  let filteredAlphabet = alphabet.filter(letter => {
    return letter >= sortStrToArr[0] && letter <= sortStrToArr[sortStrToArr.length - 1]
  });

  console.log(sortStrToArr)

  filteredAlphabet.forEach((letter) => {
    if (sortStrToArr.indexOf(letter) === -1) {
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


