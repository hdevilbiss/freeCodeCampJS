# Basic Algorithm Scripting: Where do I Belong

Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, `getIndexToIns([1,2,3,4], 1.5)` should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, `getIndexToIns([20,3,5], 19)` should return 2 because once the array has been sorted it will look like `[3,5,20]` and 19 is less than 20 (index 2) and greater than 5 (index 1).

## My Solution

Hmm. My first instinct will always be a `for` loop. But recursion might also work? What about the `sort` method?

There's two things to do:
1. Sort the data
2. Return the integer of the proper index to insert the second parameter, `num`

```JavaScript
/**
 * getIndexToIns
 * @param array : Array of nums to sort
 * @param int : Integer to add to arr
 * @return int : Index where num should be added to maintain sorting
 */
```

To sort the data, the `sort` array method will be used. Its argument is optional: a comparison function. Without a comparison function, the array values will be converted to strings and sorted by Unicode value.

Sorting numbers means testing whether arr[i] is larger than

```JavaScript
//Sort numbers in ascending order (1 > 2 > 3)
arr.sort((a, b) => a - b);
```

However, this algorithm only needs the index integer to be returned.

After reading array method pages on the MDN web docs website, it seems like `findIndex`, which ["returns the index of the first element in the array that satisfies"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex) a given function. Since `arr` is already sorted, the index needed is the first element which is larger than `num`.

```JavaScript
let myIndex = 0;
myIndex = arr.findIndex(arrayElement => 
  arrayElement >= num
);
```

However, there is an issue with `findIndex`: the function will return `-1` if `num` is either too large or the array is empty.

In the meantime, I can use a crude workaround: use nested `if` statements to test whether the index is equal to -1.

If yes, then it can be checked whether the array is empty.

If the array is empty, then the index can be returned as `0`. Otherwise, the index can be returned as `arr.length`, which would put `num` at the last index.

### Full Solution
```JavaScript
/**
 * getIndexToIns
 * @param array : Array of nums to sort
 * @param int : Integer to add to arr
 * @return int : Index where num should be added to maintain sorting
 */
function getIndexToIns(arr, num) {
  arr.sort((a, b) => {
    return a - b;
  });

  let myIndex = 0;
  myIndex = arr.findIndex(arrayElement => 
    arrayElement >= num
  );

  if (myIndex == -1) {
    if (arr.length == 0) {
      myIndex = 0;
    }
    else {
      myIndex = arr.length;
    }
  }

  console.log(myIndex)
  return myIndex;
}

getIndexToIns([40, 60], 50);
getIndexToIns([3,1,2,4,8],7);
getIndexToIns([6,6,6,9,1,4],5);
getIndexToIns([2, 5, 10], 15)
getIndexToIns([3,2,1],4)
getIndexToIns([],1)
```

Oh man, I cannot believe how extra my solution was. I revisited this problem and solved it instantly with only three lines of code.

1. Add `num` to `arr` using `push`
2. Sort the array using `sort`.
3. Return the `indexOf` of `num` within the sorted array.

```JavaScript
function getIndexToIns(arr, num) {
  arr.push(num);
  
  arr.sort((a,b) => a - b);

  return arr.indexOf(num);
}
```

## Official Solutions

This exercise has SEVEN listed solutions!

### Solution 1

Solution 1 was the most similar to my solution. First, the array gets sorted. Next, a `for` loop checks the array at each index for being larger than or equal to `num`; when this condition is `true`, that index gets returned. If the condition is never reached, then the function returns the length of the array, putting `num` at the last index.

```JavaScript
function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });

  for (var a = 0; a < arr.length; a++) {
    if (arr[a] >= num) return a;
  }

  return arr.length;
}
```

### Solution 2

Solution 2 neither adds `num` to the array, nor sorts the array. Instead, it counts how many times in the entire length of the array that the condition `num > arr[i]` is true.

```JavaScript
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var times = arr.length; // runs the for loop once for each thing in the array
  var count = 0;
  for (var i = 0; i < times; i++) {
    if (num > arr[i]) {
      count++;
    }
  } // counts how many array numbers are smaller than num
  return count; // the above equals num's position in a sorted array
}
```

### Solution 3

Solution 3 sorts the array without adding `num`. Next, it sets the index to a default of 0, then uses a `while` loop with the condition that num is greater than the value in the array at a given index, incremented the index each time that condition is true.

```JavaScript
function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });

  var i = 0;
  while (num > arr[i]) {
    i++;
  }

  return i;
}
```

### Solution 4

Solution 4 adds `num` to the array using the `push` method, then sorts, then searches for the index of `num`.

```JavaScript
function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort(function(a, b) {
    return a - b;
  });
  return arr.indexOf(num);
}
```

### Solution 5

```JavaScript
function getIndexToIns(arr, num) {
  // sort and find right index
  var index = arr
    .sort((curr, next) => curr - next)
    .findIndex(currNum => num <= currNum);
  // Returns proper answer
  return index === -1 ? arr.length : index;
}
```

### Solution 6

This solution uses chaining of array methods to achieve the goal:

1. concatenate `num` onto the array
2. sort the array from 1 > 2 > 3
4. find the `indexOf` num in the sorted array.

```JavaScript
function getIndexToIns(arr, num) {
  return arr
    .concat(num)
    .sort((a, b) => a - b)
    .indexOf(num);
}
```

### Solution 7

Here's the elegant one-liner that we all crave...

```JavaScript
function getIndexToIns(arr, num) {
  return arr.filter(val => num > val).length;
}
```