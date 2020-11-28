/**
 * sumAll
 * @param {Array} array of 2 nums, default empty array
 * @return {Number} sum of all nums in between 2 nums
 */
const sumAll = (arr = []) => {
    let myArr = arr.map(val => val).sort((a,b) => a - b);
    let sum = 0;
  
    return myArr.length > 0 
      ? myArr[0] == myArr[1]
        ? sum + myArr[0]
        : sum + sumAll(myArr[1] - 1)
      : myArr;
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
  