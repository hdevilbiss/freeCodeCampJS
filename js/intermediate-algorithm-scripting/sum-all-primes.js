/**
 * A prime number is
 * a whole number greater than 1 with exactly two divisors:
 * 1 and itself
 * @link https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
 */
const sumPrimes = (num) => {
  if (num < 2 || isNaN(num) === true) return 0;
  let k = (num - 2);
  let arrOfInts = [true] * (k + 1);
  for (let i = 1; i <= k + 1; i++) {
    j = i
    while (i + j + 2 * i * j <= k) {
      arrOfInts[i + j + 2 * i * j] = false;
    }
  }
  return arrOfInts.filter(val => val === true).reduce(((sum,curVal) => sum + curVal),0);
}

/**
 * Tests for sumPrimes
 */
const testArr = [];

testArr.push(
  [10,17],
  [977,73156],
  [0, 0],
  [1, 0],
  [2, 0]
);

testArr.forEach(arr => console.log(sumPrimes(arr[0]) === arr[1] ? `PASS: ${sumPrimes(arr[0])} === ${arr[1]}` : `FAIL: GOT ${sumPrimes(arr[0])}, EXPECTED ${arr[1]}`));
