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
2. Create two for loops; push each character into new arrays, creating character arrays.
3. For each character in the array for the second word, check `indexOf` in the first word.

There's gotta be a better way than using two `for` loops, but let's just make something that works, first.

Hey, we've got a winner!

```JavaScript
/**
 * mutation
 * @param array : an array of two strings
 * @return boolean: whether arr[0] contains all the letters in arr[1]
 */
function mutation(arr) {
  /**
   * Make everything lowercase
   * Remember that toLowerCase is a string method
   * Mutate that array!
   */
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toLowerCase();
  }
  
  console.log(arr);

  /**
   * Make arrays of characters
   */
  let firstArray = [];
  let secondArray = [];

  for (let i = 0; i < arr[0].length; i++) {
    firstArray.push(arr[0].charAt(i));
  }

  for (let i = 0; i < arr[1].length; i++) {
    secondArray.push(arr[1].charAt(i));
  }

  console.log(firstArray,secondArray);
  
  let result = '';

  for (let i = 0; i < secondArray.length; i++) {
    result = firstArray.indexOf(secondArray[i]);
    if (result == -1) {
      return false;
    }
  }
  return true;

}

mutation(["hello", "hey"]);
mutation(["hello","Hello"]);
mutation(["alien","line"]);
mutation(["Mary","aarmy"]);
```

Let's look at the official solutions. I have a feeling that I could have used `forEach` and `slice` instead of using two separate `for` loops and `charAt`.


