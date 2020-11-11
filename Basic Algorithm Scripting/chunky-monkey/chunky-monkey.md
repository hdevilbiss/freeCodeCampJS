# Basic Algorithm Scripting: Chunky Monkey

Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

## My Solution
The approach I used involved mutating the heck out of the input array, `arr`. Here was the approach.

1. Initialize an empty array to store the return array: `result`.
2. Use a `while` loop to determine whether the array length has been chopped down smaller than `size`, the integer parameter.
3. If `arr.length` is stiller larger than `size`, then splice `arr`, starting from index 0, including `size` many elements. Push the spliced-off value onto the `result` array.
4. Once the `while` loop is done, check whether `arr-length` is greater than 0.
5. If `arr.length` is greater than zero, then add all the remaining elements in `arr` to the `result` array using the `push` method and the spread operator: `result.push([...arr])`
6. Return the result array.


```JavaScript
/**
 * chunkArrayInGroups
 * @param array : array to chunk up
 * @param int : how many elements to each array chunk
 * @return array : chunked up array
 */
function chunkArrayInGroups(arr, size) {
  let result = [];

  console.log('arr:',arr,'size:',size);

  while (arr.length >= size) {
    result.push(arr.splice(0,size));
    console.log('arr after splice:',arr);
  }

  if (arr.length > 0) {
    result.push([...arr]);
  }
  
  console.log(`result:`,result,'\n\n');

  return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
```

## Solution 1

```JavaScript
function chunkArrayInGroups(arr, size) {
  var temp = [];
  var result = [];

  for (var a = 0; a < arr.length; a++) {
    if (a % size !== size - 1) temp.push(arr[a]);
    else {
      temp.push(arr[a]);
      result.push(temp);
      temp = [];
    }
  }

  if (temp.length !== 0) result.push(temp);
  return result;
}
```

## Solution 2

```JavaScript
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var arr2 = [];
  for (var i = 0; i < arr.length; i += size) {
    arr2.push(arr.slice(i, i + size));
  }
  return arr2;
}
```

## Solution 3

```JavaScript
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newArr = [];
  var i = 0;

  while (i < arr.length) {
    newArr.push(arr.slice(i, i + size));
    i += size;
  }
  return newArr;
}
```

## Solution 4

```JavaScript
function chunkArrayInGroups(arr, size) {
  var newArr = [];
  while (arr.length) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}
```

## Solution 5

```JavaScript
function chunkArrayInGroups(arr, size) {
  if (arr.length <= size) {
    return [arr];
  } else {
    return [arr.slice(0, size)].concat(
      chunkArrayInGroups(arr.slice(size), size)
    );
  }
}
```