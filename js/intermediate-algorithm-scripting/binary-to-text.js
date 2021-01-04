/**
 *
 * @param {String} str
 * Translate a string of spaced-delimited bytes into English.
 * Split the string of binary at the spaces.
 * Loop over each byte.
 * Convert each byte to decimal.
 * Get the character code of each decimal.
 * Return the joined characters.
 */
const binaryAgent = (str) => {
  const binaryArr = str.split(" ");
  const strArr = [];
  binaryArr.forEach(binary => {
    let decimal = 0;
    for (let i = 0; i <= binary.length - 1; i++) {
      decimal += parseInt(binary[i]) * Math.pow(2,((binary.length - 1) - i));
    }
    strArr.push(String.fromCharCode(decimal));
  });
  return strArr.join("");
}

/**
 *
 * @param {String} str
 * Use the spread operator to get all values in `str` parameter.
 * Split the string at the spaces.
 * Map the new array over each byte:
 * parse each byte using `parseInt`, supplying
 * base 2 as the second parameter.
 * Return the character code of each parsed byte.
 */
const compactBinaryAgent = (str) => {
  return String.fromCharCode(
    ...str.split(" ").map(byte => parseInt(byte,2))
  );
}

//Aren't bonfires fun!?
console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"))

//I love FreeCodeCamp!
console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"))

console.log(compactBinaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"))

//I love FreeCodeCamp!
console.log(compactBinaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"))
