# Intermediate Algorithm Scripting: Search and Replace

Create a search and replace function which accepts 3 arguments.

1. String to search.
1. The term to be searched.
1. What to use as the replacement.

The case on the term to be searched should remain the same after replacement; for example, "Cat" should be replaced with "Bat", not "bat".

## Solution

No offense but I like my solution better than those on the [forum](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-search-and-replace/16045) until further notice.

I wanted to try to optimize it further, since the `String.replace` method can accept a callback function as the second argument... But I need to move on.

```javascript
const myReplace = (str, before, after) => {
  let replacement = after.split("");
  /[A-Z]/.test(before.charAt(0)) === true
    ? (replacement[0] = replacement[0].toUpperCase())
    : (replacement[0] = replacement[0].toLowerCase());
  return str.replace(before, replacement.join(""));
};
```
