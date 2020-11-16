# Functional Programming: Refactor Global Variables Out of Functions

## Prompt

Rewrite the code so the global array bookList is not changed inside either function. The add function should add the given bookName to the end of the array passed to it and return a new array (list). The remove function should remove the given bookName from the array passed to it.

Note: Both functions should return an array, and any new parameters should be added before the bookName parameter.

### Code before

```javascript
// Change code below this line
function add (bookName) {

  bookList.push(bookName);
  return bookList;
  
  // Change code above this line
}

// Change code below this line
function remove (bookName) {
  var book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {

    bookList.splice(book_index, 1);
    return bookList;

    // Change code above this line
    }
}
```

### Code After

```javascript
// Change code below this line
function add (bookArray,bookName) {

  let newBookArray = [...bookArray]
  newBookArray.push(bookName);
  return newBookArray;
  
  // Change code above this line
}

function remove (bookArray,bookName) {
  let newBookArray = [...bookArray];
  var book_index = newBookArray.indexOf(bookName);
  if (book_index >= 0) {

    newBookArray.splice(book_index, 1);
    return newBookArray;

    // Change code above this line
    }
}
```

### Full Code

```javascript
// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (bookArray,bookName) {

  let newBookArray = [...bookArray]
  newBookArray.push(bookName);
  return newBookArray;
  
  // Change code above this line
}

// Change code below this line
function remove (bookArray,bookName) {
  let newBookArray = [...bookArray];
  var book_index = newBookArray.indexOf(bookName);
  if (book_index >= 0) {

    newBookArray.splice(book_index, 1);
    return newBookArray;

    // Change code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log('bookList:',bookList);
console.log('newBookList:',newBookList);
console.log('newerBookList:',newerBookList);
console.log('newestBookList:',newestBookList);
```