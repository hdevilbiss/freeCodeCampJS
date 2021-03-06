/**
 * dropElements
 * Drop elements from the array until func finds true
 * @param {Array} arr to filter
 * @param {Function} func how to filter
 * @return {Array} filtered arr: the first val to return true, and all that follow it
 */
const dropElements = (arr,func) => {
  const firstTrueIdx = arr.findIndex(func);
  return firstTrueIdx === -1
    ? []
    : arr.filter((val,idx) => idx >= firstTrueIdx);
}

/**
 * Tests for dropElements
 */
const testArr = [];

testArr.push(
  [[[1, 2, 3], n => n < 3], [1,2,3]],
  [[[-1,0,2,3,-9], n => n >= 0], [0,2,3,-9]],
  [[[1, 2, 3, 4], function(n) {return n >= 3;}],[3, 4]],
  [[[1, 2, 3, 9, 2], function(n) {return n > 2;}],[3, 9, 2]],
  [[[0, 1, 0, 1], function(n) {return n === 1;}],[1, 0, 1]],
  [[[1, 2, 3, 4], function(n) {return n > 5;}],[]],
);

testArr.forEach(([[arr,func], expectedResult]) => {
  const fail = (ini,res,exp) => {
    console.log(`FAIL: ${ini} got ${res}, expected ${exp}`)
  }
  const pass = (ini,res,exp) => {
    console.log(`PASS: ${ini} got ${res} === ${exp}`)
  }
  let result = dropElements(arr,func);
  if (result.length !== expectedResult.length) {
    fail(arr,result,expectedResult);
    return;
  }
  expectedResult.forEach((num,i) => {
    if (num !== result[i]) {
      fail(arr,result,expectedResult);
      return;
    }
  });
  pass(arr,result,expectedResult);
});
