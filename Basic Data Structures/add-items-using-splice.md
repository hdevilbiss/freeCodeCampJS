# Add items using splice()

splice() can take up to three parameters? The third parameter, comprised of one or more element(s), to add to the array.

### Parameters
1. Index to begin deleting AND where to insert Param3(s)
2. How many elements to delete
3. (can be more than one) Elements to insert


## PROMPT
 Modify the function using splice() to remove the first two elements of the array and add 'DarkSalmon' and 'BlanchedAlmond' in their respective places.

## MY SOLUTION

```JavaScript
function htmlColorNames(arr) {
  // Only change code below this line
  arr.splice(0,2,"DarkSalmon","BlanchedAlmond");
  // Only change code above this line
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
```