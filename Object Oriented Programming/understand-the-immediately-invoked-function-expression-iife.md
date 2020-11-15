# Object Oriented Programming: Understand the Immediately Invoked Function Expression (IIFE)

An immediately invoked function expression (IIFE) is a function expression which executes immediately at declaration.

Each IIFE is wrapped with two sets of parentheses.

`()();`

The first set of parentheses contains a function expression.

```javascript
(function() { return "Get this bread" })();
```

The second set of parentheses invoke the function expression.

```javascript
// named function, doTheThing
function doTheThing() {
  return "Doing the thing... Done!";
}

// invoking a named function
doTheThing();

// invoking an anon function
(function() {return "Doing the thing... Done!"}();
```

### ES6 Rewrite

The arrow functions from ES6 allows for even simpler syntax for IIFEs.

```javascript
(() => "Doing the thing... Done!")();
```

## Prompt

Rewrite the function makeNest and remove its call so instead it's an anonymous immediately invoked function expression (IIFE).

```javascript
function makeNest() {
  console.log("A cozy nest is ready");
}

makeNest();
```

## Solution
```javascript
(
  () => console.log("A cozy nest is ready")
)();
```