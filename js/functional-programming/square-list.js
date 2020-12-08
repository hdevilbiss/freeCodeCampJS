/**
 * squareList
 * @param {Array} array of assorted nums incl negative and floats
 * @return {Array} array of squared nums, only positive integers
 */
const squareList = (arr) => {
    return arr
      .filter(num => num >= 0 && num % 1 === 0)
      .map(num => num * num);
};
    
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);