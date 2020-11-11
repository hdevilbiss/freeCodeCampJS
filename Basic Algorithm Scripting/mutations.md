# Basic Algorithm Scripting: Mutations

Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

## Approach

For whatever reason, what I want to do is:

1. Put each array value into its own array, then create an array of all the letters in each word.
2. Create a new `RegExp` using the letters from the second word.
3. Test whether the regex for the second word can be found within the first word.

Here's how I want it to work:

1. `['Hello','hey']` becomes `['H','e','l','l','o']` and `['h','e','y']`.

2. Sort both arrays to be `['e','H','l','l','o']` and `['e','h','y']`. Convert both back into strings using `join`: `'ehllo'` and `'ehy'`.

3. Create new regex, providing the string `'ehy'` as the argument.

4. Return the test result of the regex on the first string.

## Roadblocks to Approach

OK, so using the approach almost worked, but creating the regex doesn't work when a letter is repeated twice; it gets duplicated in the regex.

Plus, this approach required lots of duplicating ugly code, converting from strings to arrays to strings, so let's scrap this and start over.

```JavaScript
/**
* Failed Attempt!
 */
function mutation(arr) {
  /**
   * Initialize local variables
   */
  let firstWord = arr[0].toLowerCase();
  let secondWord = arr[1].toLowerCase();
  let firstArray = [];
  let secondArray = [];
  
  /**
   * Add each character of each word into its own array index
   */
  for (let i = 0; i < firstWord.length; i++) {
    firstArray.push(firstWord.charAt(i));
  }

  for (let i = 0; i < secondWord.length; i++) {
    secondArray.push(secondWord.charAt(i));
  }

  /**
   * Alphabetically sort the letters in the arrays
   */
  firstArray.sort();
  secondArray.sort();

  /**
   * Rejoin the sorted arrays into strings
   */
  firstWord = firstArray.join('');
  secondWord = '';
  secondArray.forEach(e => {
    secondWord += `[${e}]+`;
  });

  console.log(`firstWord:${firstWord}, secondWord:${secondWord}`);

  /**
   * Create a new regex using the second word
   */
  let regex = new RegExp(secondWord,'g');
  console.log(regex);

  return regex.test(firstWord);
}
```

## New Approach After Briefly Reading Hints

1. Convert everything to lowercase.
2. Loop through each character in `arr[1]` and check indexOf.
3. If indexOf returns -1 at any point, return false.


```JavaScript
/**
 * mutation
 * @param array : an array of two strings
 * @return boolean: whether arr[0] contains all the letters in arr[1]
 */
function mutation(arr) {
  /**
   * Make everything lowercase
   */
  arr[0] = arr[0].toLowerCase();
  arr[1] = arr[1].toLowerCase();
  console.log(arr);

  /**
   * Loop through all chars in arr[1]
   * Check whether each char exists in arr[0]
   */
  let result;
  let word = arr[1];
  console.log(word)
  for (let i = 0; i < arr[1].length; i++) {
    console.log(`arr[1].charAt(i):${arr[1].charAt(i)}`)
    result = arr[0].indexOf(arr[1].charAt[i]) != -1;
    console.log(result);
  }
}

mutation(["hello", "hey"]);
mutation(["hello","Hello"]);
mutation(["alien","line"]);
mutation(["Mary","aarmy"]);

```
