# Functional Programming: Apply Functional Programming to Convert Strings to URL Slugs

## Prompt

Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL. You can use any of the methods covered in this section, and don't use replace. Here are the requirements:

The input is a string with spaces and title-cased words

The output is a string with the spaces between words replaced by a hyphen (-)

The output should be all lower-cased letters

The output should not have any spaces

### My Solution

I chose to use a regular expression to strip out all white space and punctuation from the provided string. However, this caused an issue with strings that had extra spaces; it created empty entries in the `split` array, and tampering with the regular expression didn't seem to fix it.

To get around this issue, I use the `forEach` to check each entry in the array, removing the entry using `splice` if it were exactly equal to an empty string.

However, it will be shown in the official solutions that this can be done more efficiently.

```javascript
/**
 * urlSlug
 * @param {string} title 
 * @return {string} slugified-string
 */
function urlSlug(title) {

    let regex = /\s|,|-|\./;
    let arr = title.toLowerCase().split(regex);

    console.log(arr);

    /**
     * Remove empty entries
     */
    arr.forEach((val,idx,arr) => {
        if (val === '') {
            arr.splice(idx,1);
        }
    });

    return arr.join("-");

}
```

### Official Solution 1

Instead of using a verbose `forEach` method with 3 parameters, Solution 1 uses the `filter` method with 1 parameter. The method only has 1 statement, a conditional testing for an empty string.

The regular expression is also much simpler in this solution: `\W`, indicating *any other than an alphanumeric character*. Nice...

```javascript
function urlSlug(title) {
  return title
    .split(/\W/)
    .filter(obj => {
      return obj !== "";
    })
    .join("-")
    .toLowerCase();
}
```

### Official Solution 2

The second solution uses the `trim` method to remove excess whitespace at the beginning and end of the string, followed by the `split` method, with regex of *one of more whitespace characters*.

```javascript
function urlSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .join("-");
}
```
