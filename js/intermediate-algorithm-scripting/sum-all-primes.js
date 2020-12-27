/**
 * A prime number is
 * a whole number greater than 1 with exactly two divisors:
 * 1 and itself
 * @link https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
 */
const sumPrimes = (num) => {
  if (num < 2 || isNaN(num) === true) return 0;
  let arrOfNums = Array.from({length: num + 1}, (v, k) => k).slice(2);
  let onlyPrimes = arrOfNums.filter(n => {
    let m = n - 1;
    while (m > 1 && m >= Math.sqrt(n)) {
      if (n % m === 0) return false;
      m--;
    }
    return true;
  });
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
