/**
 * countdown
 * @param {Number} n how far to countdown
 * @return {Array} the countdown
 */
const countdown = (n) => {
  if (n <= 0) {
    return [];
  }
  else {
    const myArray = countdown(n-1);
    myArray.unshift(n);
    return myArray;
  }
}
