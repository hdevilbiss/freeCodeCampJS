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

## Solution 1

Solution 1 is already so much simpler. Instead of using intermediate arrays, this function stores each word as strings in variables `test` and `target`. Oh! I didn't realize that `indexOf` is both a string AND an array method! I thought it was only for arrays.

So, Solution 1 loops through each character in the test word, providing this character to the `indexOf` method uses on the target word. If `indexOf` returns -1 at any point, then `false` gets returned immediately.

```JavaScript
Procedural

function mutation(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  for (var i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}
```

## Solution 2

Solution 2 is fancier, using array method chaining on the second word, `arr[1]`.

1. toLowerCase to make everything lower case, easier for comparison
2. split the words into characters
3. For every letter in arr[1], returns whether the lowercased version of arr[0] can find a non-negative indexOf that letter.

```JavaScript
Declarative

function mutation(arr) {
  return arr[1]
    .toLowerCase()
    .split("")
    .every(function(letter) {
      return arr[0].toLowerCase().indexOf(letter) != -1;
    });
}
```

## Solution 3

Solution 3 uses recursion and the ternary operator. It even edits the parameters given to the `mutation` function: knowing that `mutation` accepts an array as the parameter, using [target, test] in the parameter list indicates that the first index of the array is referred to as `target`, and the second index of the array is referred to as `test`.

`function mutation([ target, test ], i = 0) ...`

`mutation(["hello","hey"]) => target = "hello", test = "hey"`

### Breakdown

1. Set both the target and test words to lowercase.
2. Return an elaborate test statement which includes not only 1, but 2 ternary operators; one nested inside the other.
  - First, test whether `i`, which is initialized as zero, is greater than or equal to `test.length`.
  - If TRUE, meaning `i` has exceeded the length of the test string, then return true - the target string contains all the characters of the test string.
  - If FALSE, meaning there are still characters left to test, then check ...
    - whether the negation of using the `target.includes` method on the test character, `test[i]` returns `false`... `false` means that the target string does NOT include the test character, and so the function should return false.
    - if the negation of `target.includes()` returns true, then it means that the target string contains the test character. At this point, the function makes a recursive call, providing both `target` and `test`, and incrementing the index, `i`, by 1.


```JavaScript
function mutation([ target, test ], i = 0) {
  target = target.toLowerCase();
  test = test.toLowerCase();
  return i >= test.length
    ? true
    : !target.includes(test[i])
      ? false
      : mutation([ target, test ], i + 1);
}
```