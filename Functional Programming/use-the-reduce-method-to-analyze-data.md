# Functional Programming: Use the reduce Method to Analyze Data

## Prompt

The variable watchList holds an array of objects with information on several movies. Use reduce to find the average IMDB rating of the movies directed by Christopher Nolan. Recall from prior challenges how to filter data and map over it to pull what you need. You may need to create other variables, and return the average rating from getRating function. Note that the rating values are saved as strings in the object and need to be converted into numbers before they are used in any mathematical operations.

## Solutions

### Solutions

### My Solution

```javascript
/**
 * getRating function
 * @param {Array} watchList array of movie objects
 * @return {Integer} averageRating of all Christopher Nolan films
 */
function getRating(watchList){

  let count = 0;

  const reducer = (accRating,curMovie) => {

    // return curMovie["Director"] === "Christopher Nolan"
    //   ? accRating + parseInt(curMovie["imdbRating"])
    //   : accRating;

    if (curMovie["Director"] === "Christopher Nolan") {
      count++;
      let rating = parseFloat(curMovie["imdbRating"]);
      return accRating + rating;
    }
    else {
      return accRating;
    }
  };

  let accumulatedRating = watchList.reduce(reducer,0);

  console.log(`accumulatedRating:${accumulatedRating}`);
  console.log(`count:${count}`);

  let averageRating = accumulatedRating / count;

  return averageRating;
}
console.log(getRating(watchList));
```

### Solution 1

Solution 1 uses insane array method chaining to achieve the target.

1. `filter` to find films directed by Christopher Nolan
2. `map` to convert their ratings from strings to numbers
3. `reduce` to add together their ratings

Then another `filter` Divide by the number of Nolan films to get the average rating

```javascript
  var averageRating =
  watchList
    .filter(film => film.Director === "Christopher Nolan")
    .map(film => Number(film.imdbRating))
    .reduce((sumOfRatings, rating) => sumOfRatings + rating) /
  
  watchList.filter(film => film.Director === "Christopher Nolan").length;
  
  return averageRating;
}
```

### Solution 2

Solution 2 is almost identical to mine, except that the division by `count` is included after the `reduce` statement.

```javascript
var averageRating = watchList.reduce((sum,movie) =>  {
    //...
  }, 0) / count;
```

### Solution 3

Solution 3 uses some interesting **destructuring in the callback parameter list**. The reduce method takes 4 parameters, so why not use all 4 parameters...??

#### Callback parameters 

The first parameter, the accumulator, is an object instead of an integer, containing `sum` and `count`. This is nice - I had a gut feeling that we could maintain functional programming and avoid creating a second variable for `count` somehow. Both values are initialized as 0 in the second parameter to the `reduce` method.

The second parameter, the current value, is also an object, taking the Director and imdbRating values from the provided `watchList`.

It also uses two additional optional parameters, the index, `idx`, and `arr`, which are uses to determine whether the array is finished processing; if yes, then it returns `sum` divided by `count`, and if false, it returns the accumulater object.

Love to see it.

```javascript
function getRating(watchList) {

  const averageRating = watchList.reduce(({ sum, count }, { Director: dir, imdbRating: rating },  idx, arr) => {
    if (dir === 'Christopher Nolan') {
      count++;
      sum += Number(rating);
    }
    return idx === arr.length - 1
      ? sum / count
      : { sum, count };
  }, { sum: 0, count: 0 });

  return averageRating;
}
```

