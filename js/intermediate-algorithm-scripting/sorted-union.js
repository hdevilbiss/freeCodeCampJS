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
  let result = uniteUnique(input);
  let failArr = [];
  result.length !== expectedOutput.length
    ? failArr.push(1)
    : expectedOutput.forEach((num,idx) => {
        if (result[idx] !== num) {
          failArr.push(result[idx]);
        }
      });
  return failArr.length === 0
    ? console.log("PASS")
    : console.log("FAIL")
});
