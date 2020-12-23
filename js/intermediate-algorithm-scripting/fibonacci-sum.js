/**
 * sumFibs
 * @param {Number} num
 * @return {Number} sum of all ODD fibonacci nums <= num
 */
const sumFibs = (num) => {
  let firstNum = 0;
  let secondNum = 1;
  let fibSum = 0;

}

/**
 * The first six numbers of the Fibonacci sequence are
 * 0, 1, 1, 2, 3, 5 and 8 ... 13, 21, 34, ...
 * After 0 and 1, it is the sum of the previous 2 nums
 * Fn = 0 + 1 + (F1 + F0) + (F2 + F1) + (F3 + F2) + (F4 + F3) + ... (Fn-1 + Fn-2)
 */

/**
 * Tests for sumFibs
 */
let testArr = [];

testArr.push(
  [1000, 1785],
  [4000000, 4613732],
  [4, 5],
  [75024, 60696],
  [75025, 135721],
  [0, 0],
  [1, 2],
  [2, 2],
  [3, 5],
  [undefined, 0],
)

testArr.forEach(arr => {
  console.log(sumFibs(arr[0]) === arr[1] ? `PASS: ${sumFibs(arr[0])}` : `FAIL; got ${sumFibs(arr[0])}, expected ${arr[1]}`);
})
