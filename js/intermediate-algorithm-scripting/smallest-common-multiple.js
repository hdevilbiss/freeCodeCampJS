/**
 * smallestCommons
 * "The LCM is the smallest positive integer
 * that is evenly divisible by both a and b"
 * But we also need to consider each num in between a and b
 * @param {Array} arr with 2 nums
 * @return {Number} least common multiple also divisible by all nums in range
 */
const smallestCommons = (arr) => {
  const myArr = arr.sort((a, b) => a - b);
  const minNum = myArr[0];
  const maxNum = myArr[1];
  const rangeOfNums = [];

  /**
   * GCD: Greatest Common Denominator
   * 1st run: num1 = lcm, num2 = a number
   * Check if num2 === 0
    * if T return lcm
    * if F
      * 2nd run: num1 = a number, num2 = the remainder of lcm / num2
      * Check if the smallest common multiple is cleanly divisible by the number
      * if T return y
      * if F
        * 3rd run: Check if the remainder of (x / y) / y
        * ************************************************************************************************
   * @param {Number} x
   * @param {Number} y
   */
  const GCD = (num1, num2) => {
    // Euclidean Algorithm?
    return num2 === 0
      ? num1
      : GCD(num2, num1 % num2);
  };

  // Get array of range [a:b]
  for (let i = minNum; i <= maxNum; i++) {
    rangeOfNums.push(i);
  }

  /**
   * Reduce the range
   * the product of the smallest multiple and a number
   * divided by their greatest common denominator
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
