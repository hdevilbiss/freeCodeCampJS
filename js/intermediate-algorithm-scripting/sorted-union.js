/**
 * uniteUnique
 * @param {Array} arr of arrays to join into 1
 * @return {Array} arr of unique vals in order found, no duplicates
 */
const uniteUnique = (...arr) => {
  return new Set(arr.flat());
}

let res1 = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);//[1, 3, 2, 5, 4]
let res2 = uniteUnique([1, 2, 3], [5, 2, 1]);//[1, 2, 3, 5]
let res3 = uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);//[1, 2, 3, 5, 4, 6, 7, 8]
