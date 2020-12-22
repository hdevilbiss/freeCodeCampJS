# Basic Algorithm Scripting: Finders Keepers

## PROMPT
Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

## MY SOLUTION
```JavaScript
/**
 * findElement
 * @param array   : array to do the func on
 * @param func    : anon function truth test
 * @return mixed  : true if a value in the array passes the truth test; undefined otherwise
 */
function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      num = arr[i];
      return num;
    }
  }
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
```


## OFFICIAL SOLUTIONS
### for loop
Main differences being that they assigned num = arr[i], running func(num). Explicit return statement for undefined, not using the default behavior of JavaScript.

### find method
Beautiful! Concise!

`return arr.find(func);`

The `find` method is an array method which accepts a function as its argument, returning the first element which causes the function to return true.

#### Reference
- *Array.prototype.find()*. MDN web docs. Retrieved 2020-11-03 from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

### map and indexOf
Ugly! Don't like it! But more concise than my answer.

`return arr[arr.map(func).indexOf(true)];`

Since arrays are mutable, it appears to be resetting all indices of `arr` to `arr.map(func).indexOf(true)`.

The `map` array method is similar to `find`, except that it returns an array of all results of a given function on an array, instead of just the first element that satisfies the true condition.

The `indexOf` method will return the value at the first index that returns true for the given value. Since `true` is supplied, it will return the first index of the array which has the value `true`.

#### Reference
- *Array.prototype.map()*. MDN web docs. Retrieved 2020-11-03 from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map