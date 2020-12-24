/**
 * A prime number is
 * a whole number greater than 1 with exactly two divisors:
 * 1 and itself
 * @link https://web.sonoma.edu/math/colloq/primes_sonoma_state_9_24_08.pdf
 */
const sumPrimes = (num) => {
  const primes = [2,3,5,7,11];
  return num;
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

testArr.forEach(arr => console.log(arr))
