/**
 * A prime number is
 * a whole number greater than 1 with exactly two divisors:
 * 1 and itself
 * @link https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
 */
const sumPrimes = (num) => {
  if (num < 2 || isNaN(num) === true) return 0;
  const numsObj = {};
  for (let i = 2; i <= num; i++) {
    numsObj[i] = true;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (numsObj[i] === true) {
      for (let j = Math.pow(i,2); j <= num; j + i) {
        numsObj[j] = false;
      }
    }
  }

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
