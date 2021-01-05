/**
 *
 * @param  {...Number} nums
 * Given a 1 - 2 arguments, check whether the arguments are all numbers:
 * return `undefined` if not all numbers.
 * If numbers, then check how many arguments there are.
 * For fewer than 2 arguments, return a function.
 * For 2 or more arguments, return the sum of the numbers.
 */
const addTogether = (...nums) => {
  /**
   *
   * @param {Number} num
   * Check whether a given arguments is a number.
   * Return a `Boolean` value: true = number.
   */
  const checkForNumberType = val => typeof(val) === "number";
  const providedArgs = [...nums];
  console.log(providedArgs)
  return providedArgs.every(val => checkForNumberType(val)) !== true
    ? undefined
    : providedArgs.length === 1
      ? addTogether.bind(this,...providedArgs)
      : providedArgs.reduce((sum,curNum) => sum + curNum);
}

console.log(addTogether(2, 3));//5
console.log(addTogether(23, 30));//53
console.log(addTogether(5)(7));//12
console.log(addTogether(2, "3"));//undefined
//console.log(addTogether(4)(2)(3)(1));//10
console.log(addTogether(2)([3]));//undefined
