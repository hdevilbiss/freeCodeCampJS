/**
 * sumAll
 * @param {Array} two vals to make a range
 * @return {Number} sum of range
 */
const sumAll = ([ first, last ] = [0,0]) => {
  const increment = first - last < 0 ? 1 : -1;
  return first !== last
    ? first + sumAll([ first + increment, last ])
    : first;
 };

/**
 * Tests for sumAll
*/
let sortedArr = [1,4];//10
let undefArr = undefined;
let unsortedArr = [10,5];//45

console.log(sumAll(sortedArr));
console.log(sumAll(undefArr));
console.log(sumAll(unsortedArr));