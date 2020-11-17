# Functional Programming: Implement map on a Prototype

Build your own version of `Array.prototype.map` using a `for` loop or the `forEach` method.

## Prompt

Write your own `Array.prototype.myMap()`, which should behave exactly like `Array.prototype.map()`. You should not use the built-in map method. The Array instance can be accessed in the myMap method using `this`.

## Solution Using for loop

This solution uses a `for` loop.

```javascript
Array.prototype.myMap = function(callback) {

  var newArray = [];

  for (let i = 0; i < this.length; i++) {

    newArray.push(callback(this[i]));

  }

  return newArray;
};
```

This code can be rewritten using ES6 features.

```javascript
Array.prototype.myMap = (callback) => {
  let newArray = [];

  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));
  }
  return newArray;
}
```

## Solution using forEach

I tried to get this down to only one line of code; however, trying to cut it down to even two lines of code, with the second being the `return` statement, returned `undefined`. Let's look at the official solutions next.

```javascript
Array.prototype.myMap = function(callback) {
  let newArray = [];
  this.forEach(item =>
    newArray.push(callback(item))
  );
  return newArray;
};
```

## Official Solutions

### Solution 1: forEach

Solution 1 uses the `forEach` solution, and it is also in 3 lines of code.

### Solution 2: for loop

Solution 2 uses the `for` loop solution, identical to what I pasted above.

### Solution 3

The one-liner! Solution 3 uses the ternary operator to reduce the code down to one line. It provides 2 additional parameters in the function call, both with default values: `arr` and `i`. The array parameter defaults to an empty array, while the index defaults to 0.

The condition checked is whether the index is smaller than the length of the array: whether there is array left to work on.

`i < this.length `

If true, then `myMap` is called recursively, providing the `callback` function parameter as the first argument. The second argument calls the concatenation method on the array parameter, adding on information.

`? this.myMap(callback, ...)`

The add-on to `arr` is the result of the `callback` function on `this[i]`. The value `this[i]` is really, "*the array at the current index*". In other words, the second argument to the recursive call to `myMap` causes `callback` to happen on each indexed element in the original Array that called `myMap`.

`..., arr.concat(callback(this[i])), ...`

The index, `i`, gets incremented by 1 each time that `myMap` gets called recursively.

`... , i + 1);`

Here is the full return statement for cases where the index is less than the array length.

`? this.myMap(callback, arr.concat(callback(this[i])), i + 1)`

In cases where the index is greater than the array length, the value `arr` gets returned.

```javascript
return i < this.length
  ? this.myMap(

    callback, 

    arr.concat(callback(this[i])),i + 1
  
  )

  : arr;
```

#### Solution 3 Full Code

```javascript
Array.prototype.myMap = function(callback, arr = [], i = 0) {
  return i < this.length
    ? this.myMap(callback, arr.concat(callback(this[i])), i + 1)
    : arr;
};
```

### Archive Full Code

Here is the full code from my original solution.

```javascript
// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  var newArray = [];
  // Only change code below this line
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));
  }
  // Only change code above this line
  console.log(newArray);
  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});
```