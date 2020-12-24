/**
 * sumFibs
 * @param {Number} num
 * @return {Number} sum of all ODD fibonacci nums <= num
 * 1. Get the full Fibonacci sequence (until num) as an array
 * 2. Filter by odds, then reduce to its sum
 */
const sumFibs = (num) => {
  const fibonacci = [0,1,1];
  while ( fibonacci[fibonacci.length - 1] < num ) {
    fibonacci.push( fibonacci[fibonacci.length - 2] + fibonacci[fibonacci.length - 1] );
  }
  return fibonacci.filter(fibNum => fibNum % 2 === 1 && fibNum <= num).reduce(((sum,curVal) => sum + curVal), 0);
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
  [3, 5],
  [undefined, 0],
)

testArr.forEach(arr => {
  console.log(sumFibs(arr[0]) === arr[1] ? `PASS: The fib sum of ${arr[0]} == ${sumFibs(arr[0])} == ${arr[1]}` : `FAIL; ${arr[0]} got ${sumFibs(arr[0])}, expected ${arr[1]}`);
})
