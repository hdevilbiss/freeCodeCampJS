/**
 * smallestCommons
 * @param {Array} arr with 2 nums
 * @return {Number} least common multiple also divisible by all nums in range
 */
const smallestCommons = (arr) => {
  const myArr = arr.sort((a, b) => a - b);
  const minNum = myArr[0];
  const maxNum = myArr[1];
  const rangeOfNums = [];

  // Euclidean Algorithm
  const GCD = (x, y) => {
    return y === 0
      ? x
      : GCD(y, x % y);
  };

  // Get array of range [a:b]
  for (let i = minNum; i <= maxNum; i++) {
    rangeOfNums.push(i);
  }

  /**
   * Reduce the range to 1 LCM
   * @link https://developer.mozilla.org/en-us/docs/web/javascript/reference/global_objects/array/reduce
   */
  return rangeOfNums.reduce((lcm,num) => {
    return (lcm * num) / GCD(lcm,num);
  });
}

/**
 * Tests for smallestCommons
 */
const testArr = [];

testArr.push(
  [[1,5], 60],
  [[5,1], 60],
  [[1,3], 6],
  [[3,1], 6],
  [[2,3], 6],
  [[3,2], 6],
  [[2,10],2520],
  [[1,13],360360],
  [[23,18],6056820]
);

testArr.forEach(([arr, expectedResult]) => {
  console.log(smallestCommons(arr) === expectedResult ? `PASS: ${smallestCommons(arr)} === ${expectedResult} with ${arr}` : `FAIL: Got ${smallestCommons(arr)} with ${arr}, expected ${expectedResult}`)
});
