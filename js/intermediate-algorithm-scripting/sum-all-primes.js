/**
 * A prime number is
 * a whole number greater than 1 with exactly two divisors:
 * 1 and itself
 * @link https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
 */
const sumPrimes = (num) => {

  /**
   * Return 0 for nums less than 2
   * or non-numbers
   */
  if (num < 2 || isNaN(num) === true) return 0;

  /**
   * Make a list of integers from 0 to num
   * Cut off 0 and 1
   */
  let arrOfNums = Array.from({length: num + 1}, (v, k) => k).slice(2);

  /**
   * Create separate, filtered array for primes only
   * Create a new index, m, for (n - 1), current int minus 1
   * Check each integer for clean division into itself minus 1
   * Continue checking until you reach the square root of n - 1
   * Decrement n - 1 by 1
   * If the current int wasn't cleanly divisible by anything,
   * return true to include in the filtered array
   */
  let onlyPrimes = arrOfNums.filter(n => {
    let m = n - 1;
    while (m > 1 && m >= Math.sqrt(n)) {
      if (n % m === 0) return false;
      m--;
    }
    return true;
  });

  /**
   * Sum all integers that make it into the filtered array
   */
  return onlyPrimes.reduce((sum,curNum) => sum + curNum);
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
  [2, 2]
);

testArr.forEach(arr => console.log(sumPrimes(arr[0]) === arr[1] ? `PASS: ${sumPrimes(arr[0])} === ${arr[1]}` : `FAIL: GOT ${sumPrimes(arr[0])}, EXPECTED ${arr[1]}`));
