# Basic Algorithm Scripting: Falsy Bouncer

## Prompt

Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.

## My Solution

To convert each value in the array to either TRUE or FALSE, my first instinct will be to use a `for` loop with an `if` condition, simply providing `arr[i]` as the condition, which will pass only for a truthy values.

If `arr[i]` is truthy, then use the `push` method to add it to the end of a temporary array. Return this temporary array.

I have a feeling that at least one of the official solutions will find a way to use `splice`, but this is what I got to work.

```JavaScript
/**
 * bouncer
 * @param array : array of items, some of which might be falsey
 * @return array : array containing only non-falsey values
 */
function bouncer(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {

    if (arr[i]) {
      newArray.push(arr[i])
    }
  }
  
  console.log(newArray);
  return newArray;
}

bouncer([7, "ate", "", false, 9]);
```

## Solution 1

Solution 1 was identical to mine; just keep it simple by using an if condition inside a for loop, adding to a temporary array if a truthy value is found.

## Solution 2

Again! An elegant solution, reducing an entire function to one line!

Solution 2 uses the `filter` method, which is used on an array, and provided with an argument, which is expected to be a function. This function gets called on each element of the array.

```JavaScript
function bouncer(arr) {
  return arr.filter(Boolean);
}
```

The function used on each element is `Boolean`, which creates a true/false map depending on the element's value. The values "[0, -0, null, false, NaN, undefined, or the empty string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)" will evaluate to false, and thus be omitted from the filtered return array. 