# Object Oriented Programming: Use an IIFE to Create a Module

Immediately-invoked function expressions are apparently often used to group functions into objects, signifying a relationship between the functions.

This object full of related functions is known as a **module**.

From [freeCodeCamp.org](https://freeCodeCamp.org):

>  The advantage of the module pattern is that all of the motion behaviors can be packaged into a single object that can then be used by other parts of your code.

## Prompt

Create a module named funModule to wrap the two mixins isCuteMixin and singMixin. funModule should return an object.

```javascript
let isCuteMixin = function(obj) {
  obj.isCute = function() {
    return true;
  };
};
let singMixin = function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
};
```

## Solution

```javascript
/**
 * funModule with mixins
 */
let funModule = (() => {
  return {
    isCuteMixin: (obj) => {
      obj.isCute = () => true;
    },
    singMixin: (obj) => {
      obj.sing = () => console.log("Singing to an awesome tune");
    }
  }
})();
```