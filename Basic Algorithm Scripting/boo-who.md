# Basic Algorithm Scripting: Boo who

## Prompt
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.

## My Solution
```JavaScript
function booWho(bool) {
  return typeof bool == 'boolean' ? true : false;
}

booWho(null);
booWho(true);
```

## Official Solution

The official solution uses strict equality with `===`. I didn't think this would be necessary... Additionally, it appears that I did not need to use the ternary operator; a conditional will return either true or false.

```JavaScript
function booWho(bool) {
  return typeof bool === "boolean";
}
```