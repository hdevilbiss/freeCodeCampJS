/**
 * uniteUnique
 * @param {Array} arr of arrays to join into 1
 * @return {Array} arr of unique vals in order, no duplicates
 */
const uniteUnique = (arr) => {
  return arr;
}

/**
 * Tests for uniteUnique
 */
let testArr = [];

testArr.push(
  [[[1, 3, 2], [5, 2, 1, 4], [2, 1]],[1, 3, 2, 5, 4]],
  [[[1, 2, 3], [5, 2, 1]],[1, 2, 3, 5]],
  [[[1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]],[1, 2, 3, 5, 4, 6, 7, 8]]
);

testArr.forEach(([ input, expectedOutput ]) => {
  console.log(`result:${uniteUnique(input) === expectedOutput ? "PASS" : "FAIL"}`);
});
