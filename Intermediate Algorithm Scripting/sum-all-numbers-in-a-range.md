# Intermediate Algorithm Scripting: Sum All Numbers in a Range

## Link

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range

## Prompt

We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

### My solution

This solution is a bit verbose compared to the official solutions.

First, a reducer function is defined, which adds the accumulated and current values together. Next, the input array is mapped then sorted into a local array. The now-sorted numbers get shifted and popped into local variables, leaving the local array temporarily empty.

Next, a `for` loop starts its index at the smaller number, executing its code as long as the index is less than or equal to the larger number, incrementing by 1. The code inside the loop pushes the current index into the local array.

Finally, the `reduce` method is applied on the local array, provided the `reducer` method defined earlier, and the initial current value, 0. The `reduce` method adds each number in the range into one sum, which gets returned from `sumAll`.

```javascript
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
```

### Recursive Solution from freeCodeCamp

The fourth solution on the freeCodeCamp forum uses destructuring in the parameter to the `sumAll` method to access the first and second values, storing them at `first` and `last`.

Next, it uses the subtraction of these two numbers as the condition to a ternary operator; if true, the step is 1, otherwise, negative 1.

In the return statement, the ternary operator is also used on the condition whether the first number is NOT equal to the last number.

If false, meaning the numbers are equal, then the first number is returned.

If true, meaning the numbers are NOT equal, then call `sumAll` recursively, providing a version of the first number which is incremented by 1 or -1. All increments of `first` will go through `sumAll` until `first` is equal to `last`.

```javascript
function sumAll([ first, last ] ) {
 const step = first - last < 0 ? 1 : -1;
 return first !== last
   ? first + sumAll([ first + step, last ])
   : first;
}
```

#### Bugfix for Solution 4

If you pass `undefined` into the recursive solution, this will break the function. Instead, a default array of [0,0] can be defined, meaning `sumAll` will return 0 if you give it undefined.

This function will break if you give it a string.

```javascript
function sumAll([ first, last ] = [ 0, 0 ] ) {
 const step = first - last < 0 ? 1 : -1;
 return first !== last
   ? first + sumAll([ first + step, last ])
   : first;
}
```