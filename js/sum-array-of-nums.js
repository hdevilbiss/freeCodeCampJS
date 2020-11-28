/**
 * sumAll
 * @param {Array} array of 2 nums, default empty array
 * @return {Number} sum of all nums in between 2 nums
 */
const sumAll = (arr = []) => {
    let myArr = arr.map(val => val).sort((a,b) => a - b);

    const reducer = (sum,curVal,originalArr) => {
      
    };

    let sumArr = myArr.reduce(reducer,myArr[0]);

    return sumArr;
};
  
  /**
   * Tests for sumAll
   */
  let sortedArr = [1,4];//10
  let undefArr = undefined;
  let unsortedArr = [10,5];//38
  
  console.log(sumAll(sortedArr));
  console.log(sumAll(undefArr));
  console.log(sumAll(unsortedArr));
  