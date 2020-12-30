/**
 * steamrollArray
 * Flatten a nested array no matter how wonky
 * @param {Array} arr which may have sub arrays
 * @return {Array} one flattened array
 */
const steamrollArray = (arr) => {
  let newArr = arr.flat();
  return newArr;
}

console.log(steamrollArray([[["a"]], [["b"]]]))
console.log(steamrollArray([1, [2], [3, [[4]]]]))
