# Remove Items Using Splice

We've learned how to remove elements from the beginning and end of arrays using shift() and pop(), but what if we want to remove an element from somewhere in the middle? Or remove more than one element at once? Well, that's where splice() comes in. 


The first two parameters of splice() are integers which represent indexes, or positions, of the array that splice() is being called.

**Parameters**
1. Start index
2. How many elements to delete

`splice` not only modifies the array it's being called on, but it also returns a new array.

## Prompt

Use splice() to remove elements from arr, so that it only contains elements that sum to the value of 10.

## Solution

```javascript
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice(0,1);
arr.splice(3,4);
// Only change code above this line
console.log(arr);
```