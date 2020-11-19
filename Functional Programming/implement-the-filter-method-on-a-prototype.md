# Functional Programming: Implement the filter Method on a Prototype

## Prompt

You might learn a lot about the filter method if you implement your own version of it. It is recommended you use a for loop or Array.prototype.forEach().

Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter(). You should not use the built-in filter method. The Array instance can be accessed in the myFilter method using this.

## Solution

The goal of this exercise was to create a new method available to all arrays. This is done with `Array.prototype.${methodName}`

```javascript
Array.prototype.myFilter = ...
```

### Full for loop Solution

```javascript
Array.prototype.myFilter = function(callback) {

  let newArray = [];

  for (let i = 0; i < this.length; i++) {

    if (callback(this[i]) === true) {
      newArray.push(this[i]);
    }
  }

  return newArray;
};
```


### Full Code

```javascript
// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {

  let newArray = [];

  for (let i = 0; i < this.length; i++) {

    if (callback(this[i]) === true) {
      newArray.push(this[i]);
    }
  }

  return newArray;
};

var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});
```