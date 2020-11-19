# Function Programming

There were a few core principles to functional programming outlined in the [freeCodeCamp.org](https://freecodecamp.org) preface.

**Functions should:**
1. Be independent, depending only on arguments.
2. Avoid state changes: leave global objects alone.
3. Produce minimal side effects.

We will learn how to break JavaScript in small, testable parts.

Functions can be:

1. Isolated (No state dependence).
2. Pure (Same input, same output).
3. Limited in side effects, such as mutations.

## Callbacks

Callbacks are functions that get passed to another function to decide its outcome. For example, a callback function may be passed to a `filter` method to decide how to filter an array.

## First Order ("Class") Functions

All JavaScript functions are first-class functions. First-class functions can be:

- Assigned to a variable
- Passed to another function
- Returned from a function

## Higher Order Functions

Higher order functions either accept functions as arguments, or return functions.

## Lambda

The functions passed in, or returned, are known as *lambda*.

## Declarative vs. Imperative

> JavaScript offers many predefined methods that handle common tasks ... For example, instead of using the for loop mentioned above, you could call the map method which handles the details of iterating over an array.

The issue with mutation is that it can make it harder to debug your programs when something goes wrong. Changes to function arguments or global parameters can contribute to the confusion.

*... in functional programming, changing or altering things is called mutation, and the outcome is called a side effect*

## Recap on Two Principles for Functional Programming

1. Create new variables instead of altering existing variables.
2. Declare arguments for functions, and only operate on the arguments; leave the global object alone!

## The map array method

The `map` method is an iterator method which is used on array directly. It receives a function, known as a **callback**, which acts on each item in the array.

It returns an array; a copy of the original array, that has been mutated by the callback function. The return array will be the same length as the original array.

Thankfully, the original array will not have been mutated. This means that `map` is a "pure" function.

According to [freeCodeCamp.org](https://freecodecamp.org), the callback function may receive up to three arguments:

1. the current element being processed,
2. the index of the current element being processed, and
3. the array on which `map` was called. 

The `map` array method can be used to replace `for` loops, decreasing the syntactic overhead in code: simpler syntax means less likely to have syntax errors, right?

## The filter array method

The `filter` method is similar to the `map` method: it does not mutate the original array, and accepts the same arguments:

1. the current element being processed,
2. the index of the current element being processed, and
3. the array on which filter was called.

In its simplest form, the `filter` method uses the first argument and performs a simple conditional check on it.

```javascript
let sendSpamAboutMedicaid = (person) => `${person}, you may be eligible for Medicaid in the state of Michigan! Check now on MIBridges.gov`;

let myArray = [
    {name:"Harry",age:20},
    {name:"Hannah",age:26},
    {name:"Holly",age:10},
    {name:"Harriet",age:65},
    {name:"Heather",age:16},
    {name:"Hazel",age:22}
    ];

/**
 * Filter array by age >= 18 
*/
let filteredArray = myArray.filter(person => person.age > 18 && person.age <= 64)

console.log(filteredArray);

let mailingList = filteredArray.forEach((person) => sendSpamAboutMedicaid(person));
```

Unlike the `map` method, the `filter` method does *not* return an identically-lengthed array; it only returns values which pass the condition with truth.