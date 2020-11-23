# Functional Programming: Split a String into an Array Using the split Method

## Prompt

Use the split method inside the splitify function to split str into an array of words. The function should return the array. Remove all punctuation.

### Solution

Using regex to spot all white spaces and rogue punctuation.

```javascript
/**
 * splitify
 * @param {string} which is something to split apart
 * @return {Array} of the split pieces
 */
function splitify(str = '') {
  return str.split(/\s|,|-|\./);
}

/**
 * Tests for splitify
 */
let myString = "Hello World,I-am code";
let arrayOfStrings = splitify(myString);

console.log(splitify(undefined));
console.log(arrayOfStrings);
```