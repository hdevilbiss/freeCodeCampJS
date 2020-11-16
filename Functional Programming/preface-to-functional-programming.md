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

