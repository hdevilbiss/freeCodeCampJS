/**
 *
 * @param {String} str of space-separated binary
 * @return {String}
 * Translate a string of binary into English
 */
const binaryAgent = (str) => {
  // Split string at the spaces
  const binaryArr = str.split(" ");
  const decimalArr = [];
  const strArr = [];

  // Loop over each byte
  binaryArr.forEach(binary => {
    let decimal = 0;

    // Convert each byte to decimal
    for (let i = 0; i < binary.length; i++) {
      decimal += parseInt(binary[i]) * Math.pow(2,i);
    }

    decimalArr.push(decimal);
    strArr.push(String.fromCharCode(decimal));
  });
  console.log(decimalArr);
  console.log(strArr);
}

//Aren't bonfires fun!?
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

//I love FreeCodeCamp!
binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001");
