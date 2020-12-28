/**
 * smallestCommons
 * "The LCM is the smallest positive integer
 * that is evenly divisible by both a and b"
 * But we also need to consider each num in between a and b
 * @param {Array} arr with 2 nums
 * @return {Number} least common multiple also divisible by all nums in range
 */
const smallestCommons = (arr) => {
  const myArr = arr.sort();
  const a = myArr[0];
  const b = myArr[1];
  const LCM = [];

  /**
   * getPrimes
   * @param {Number} num
   * @return {Array} arr of prime numbers <= num
   */
  const getPrimes = (num) => {
    let arrOfNums = Array.from({length: num + 1}, (v, k) => k).slice(2);
    let onlyPrimes = arrOfNums.filter(n => {
      let m = n - 1;
      while (m > 1 && m >= Math.sqrt(n)) {
        if (n % m === 0) return false;
        m--;
      }
      return true;
    });
    return onlyPrimes;
  }

  const aPrimes = getPrimes(a);
  const bPrimes = getPrimes(b);

  /**
  * LCM is a product of:
  * Common primes (duplicated in a and b)
  * Unique primes
  */

  // Get b primes that a also has
  for (let i = 0; i < bPrimes.length; i++) {
    if (aPrimes.includes(bPrimes[i])) {
      LCM.push(bPrimes[i]);
    }
  }
}

/**
 * Tests for smallestCommons
 */
const testArr = [];

testArr.push(
  [[1,5], 60],
  [[5,1], 60],
  [[1,3], 3],
  [[3,1], 3],
  [[2,3], 6],
  [[3,2], 6],
  [[2,10],2520],
  [[1,13],360360],
  [[23,18],6056820]
);

testArr.forEach(([arr, expectedResult]) => {
  console.log(smallestCommons(arr) === expectedResult ? "PASS" : "FAIL")
});
