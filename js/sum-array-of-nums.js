/**
 * sumAll
 * @param {Array} array of 2 nums, default empty array
 * @return {Number} sum of all nums in between 2 nums
 */
const sumAll = (arr = []) => {

  /**
   * Add two numbers together
   * To be used as param with Array.reduce
   * @param {Number} accSum 
   * @param {Number} curNum 
   */
  const reducer = (accSum = 0,curNum) => accSum + curNum;
  
  let myArr = arr.map(num => num).sort((a,b) => a - b);
  let lowerNum = myArr.shift();
  let higherNum = myArr.pop();
  for (let i = lowerNum; i <= higherNum; i++) {
    myArr.push(i);
  }
  let mySum = myArr.reduce(reducer,0);
  
  

  
  return mySum;
};
  
/**
 * Tests for sumAll
*/
let sortedArr = [1,4];//10
let undefArr = undefined;
let unsortedArr = [10,5];//45

console.log(sumAll(sortedArr));
console.log(sumAll(undefArr));
console.log(sumAll(unsortedArr));
  