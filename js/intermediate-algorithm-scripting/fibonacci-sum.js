/**
 * sumFibs
 * @param {Number} num
 * @return {Number} sum of all ODD fibonacci nums <= num
 */
const sumFibs = (num) => {
  const fibonacci = [0,1,1];
  /**
   * Get the full Fibonacci sequence as an array
   */
  while ( fibonacci[fibonacci.length - 1] < num ) {
    // Push the sum of the second-to-last and the last numbers in the array, onto the array
    fibonacci.push(fibonacci[fibonacci.length - 2] + fibonacci[fibonacci.length - 1]);
  }
  console.log(fibonacci)

  /**
   * Filter the Fibonacci array by num % 2 == 1 (keep only odds)
   * Reduce the new array into one value: its sum
   */
  return fibonacci.filter(fibNum => (fibNum % 2 === 1) && (fibNum <= num)).reduce(((acc,curVal) => acc + curVal), 0);
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
  console.log(sumFibs(arr[0]) === arr[1] ? `PASS: The fib sum of ${arr[0]} == ${sumFibs(arr[0])} == ${arr[1]}` : `FAIL; ${arr[0]} got ${sumFibs(arr[0])}, expected ${arr[1]}`);
})
