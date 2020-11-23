# Functional Programming: Sort an Array Alphabetically using the sort Method

## Prompt

Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order.

### Solution

```javascript
/**
 * alphabeticalOrder
 * @param {Array} array to mutate?
 * @return {Array} A-Z sorted array
 */
function alphabeticalOrder(arr = []) {
  return arr.map(val => val).sort();
}

/**
 * Tests for alphabeticalOrder
 */
let myArr = ["a", "d", "c", "a", "z", "g"];
let myArrSorted = alphabeticalOrder(myArr);
let undefinedArray = alphabeticalOrder(undefined);

console.log(myArr);
console.log(myArrSorted);
console.log(undefinedArray);
```