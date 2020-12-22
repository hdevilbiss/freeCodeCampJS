/**
 * sumFibs
 * @param {Number} num
 * @return {Number} sum of all fibonacci nums <= num
 */
const sumFibs = (num) => {
  let sum;
  let numArr = [1,1];
  if (num > 1) {
    while (numArr[1] < num) {
      sum = numArr[0] + numArr[1];
      numArr[0] = numArr[1];
      numArr[1] = sum;
    }
  }
  /**
   * The first six numbers of the Fibonacci sequence are
   * 1, 1, 2, 3, 5 and 8 ... 13, 21, 34, ...
   * After 1 and 1, it is the sum of the previous 2 nums
   * f(x) = 1 + 1 + (x[0] + x[1]) + (x[1] + x[2]) + (x[2] + x[3]) + (x[3] + x[4]) + ...
   */
  if (num === 1) sum = 2;
  if (num === 0 || num == undefined) sum = 0;
  return sum;
}

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
  [3, 4],
  [undefined, 0],
)

testArr.forEach(arr => {
  console.log(sumFibs(arr[0]) === arr[1] ? "PASS" : `FAIL; got ${sumFibs(arr[0])}, expected ${arr[1]}`);
})
