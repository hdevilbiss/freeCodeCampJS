/**
 * steamrollArray
 * Flatten a nested array no matter how wonky
 * @param {Array} arr which may have sub arrays
 * @return {Array} one flattened array
 *
 * The accumulator is an empty array; for each element, check whether it is an array;
 * if NOT, then add to the array;
 * otherwise, concatenate a recursive call to steamrollArray,
 * except providing the current element as the argument.
 *
 */
const steamrollArray = (arr) => {
  return arr.reduce(((accumulator,current) => {
    return !Array.isArray(current)
      ? accumulator.concat(current)
      : accumulator.concat(steamrollArray(current));
  }),[]);
}

console.log(steamrollArray([[["a"]], [["b"]]])); // expected [a,b]
console.log(steamrollArray([1, [2], [3, [[4]]]])) // expected [1,2,3,4]
