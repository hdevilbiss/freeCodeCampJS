# Basic Algorithm Scripting: Title Case a Sentence

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

## "My" Solution

This one was difficult! For most of the other problems, I was able to cobble something together. For this solution, I was determined to use Regex capture groups. In the end, I had to consult Stack Overflow, having a terrible time trying to figure out how JavaScript captures groups work using `match`, `exec`, and `matchAll`.

Finally, I found an [elegant solution](https://stackoverflow.com/a/41445988/12621376) posted by Sebastien H on Stack Overflow, which uses the `map` method on the array returned by `match`. `map` is supplied an anonymous function with parameter `e` which runs the `replace` method, replacing the `regex` with the first capture group, `$1`.

```JavaScript
let matches = (string.match(reg) || [])
  .map(
    e => e.replace(reg, '$1')
    );
console.log(matches);
```

Here's the regex that I'll use. It includes:

- A non-captured group, either the beginning of the line, or a space-like character.
- A capture group which is exactly 1 letter.
- A capture group, which is 0 or many apostrophes, and 0 or many alphanumeric characters.

```JavaScript
/**
 * First try of  the regex
*/
let regex = /(?:^|\s)([A-Za-z])(\'*\w*)/g;
```

However, after finishing the example, this can be simplified by using the `i` flag.

```JavaScript
/**
 * Simplified regex using 
 * the case-insensitive flag, `i`
*/
let regex = /(?:^|\s)([a-z])(\'*[a-z]*)/gi
```

Here is what capture groups `$1` and `$2` look like for "I'm a little tea pot":
```JavaScript
$1 = [ 'I', 'a', 'l', 't', 'p' ] 
$2 = [ '\'m', '', 'ittle', 'ea', 'ot' ]
```


The main downside of using **regex capture groups** is speed... It's **slow, but it works**!

```JavaScript
function titleCase(str) {
  let regex = /(?:^|\s)([A-Za-z])(\'*\w*)/g
  let strTitleCase = '';

  /**
   * Get Capture Groups
   */
  let firstChars = (str.match(regex) || [])
  .map(
    e => e.replace(regex, '$1')
    );

  let allTheRest =  (str.match(regex) || [])
  .map(
    e => e.replace(regex, '$2')
    );

    /**
     * Loop through the capture group arrays
     * Set the firstChars toUpperCase()
     * Set theRest toLowerCase()
     * 
     * Add a trailing space for each index;
     * except for the last one...
    */
    for ( let i = 0 ; i < firstChars.length ; i++) {
    if ( i == firstChars.length - 1 ) {
        strTitleCase += firstChars[i].toUpperCase()+allTheRest[i].toLowerCase();
    }
    else {
        strTitleCase += firstChars[i].toUpperCase()+allTheRest[i].toLowerCase()+' ';
    }
    }
  console.log(strTitleCase);
  return strTitleCase;
}

titleCase("I'm a little tea pot");
//I'm A Little Tea Pot
```

## Solution 1

Solution 1 makes use of the following methods:

- substr
- split
- charAt
- a custom method, replaceAt
- join

I don't really like this approach because of the mental gymnastic required to understand the custom method, but I bet it's faster than using capture groups.

```JavaScript
/**
 * SOLUTION 1
*/

/**
 * Custom string method, replaceAt
*/
String.prototype.replaceAt = function(index, character) {
  return (
    this.substr(0, index) + character + this.substr(index + character.length)
  );
};

/**
 * titleCase
 * @param string
 * @return string
 * 
 * Split the string according to spaces
 * Operate on the split string;
 * save the operation result to an array;
 * return the result of joining each item in the array
*/
function titleCase(str) {
  var newTitle = str.split(" ");
  var updatedTitle = [];
  for (var st in newTitle) {
    updatedTitle[st] = newTitle[st]
      .toLowerCase()
      .replaceAt(0, newTitle[st].charAt(0).toUpperCase());
  }
  return updatedTitle.join(" ");
}
```


## Solution 2

Solution 2 does not use a custom method, so I already like it better than solution 1.

It starts by splitting the str argument and saving it to a new variable. It then uses the `map` method to replace the first characters (`charAt(0)`) with its toUpperCase() equivalent. At the end, it uses `join(" ")` to rejoin into one string.

```JavaScript
function titleCase(str) {

/**
 * Convert string to lower case, then split according to spaces
*/
var convertToArray = str.toLowerCase().split(" ");

/**
 * Use the map method to run an anonymous sub-function, which replaces the first character of each item in convertToArray.map with its UpperCase equivalent
*/
var result = convertToArray.map(
    function(val) {
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    }
);
return result.join(" ");
}
```

Using ES6 notation, `result` could be re-written with simpler syntax.

```JavaScript
var result = convertToArray.map(
    val => val.replace(val.charAt(0),val.charAt(0).toUpperCase())
);
```

## Solution 3

Solution 3 is the shortest, and probably the most elegant solution, using Regex and taking up only 1 line of code.

Use these methods on the `str` argument:
- toLowerCase()
- replace

The replace argument receives two arguments:
1. The regex, `/(^|\s)\S/g`
2. The function, `L => L.toUpperCase()`

`(^|\s)` indicates "beginning of line or space". The capital `\S` indicates "anything other than whitespace". First, `str` gets turned into fully lowercase.

Then, `str` gets checked for "anything preceded by the beginning of the string or a space". When found, these parts of the string get turned into uppercase.

```JavaScript
function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
}
```