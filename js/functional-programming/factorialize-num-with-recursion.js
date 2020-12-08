// function factorialize(num) {
//     if (typeof num == "number") {
//       if (num <= 1) {
//         return 1;
//       }
//       else {
//         return num * factorialize(num - 1);
//       }
//     }
//     else {
//       return "Not a number";
//     }
// }
  
const factorialize = (num) => {
    return typeof num == "number"
        ? num <= 1
            ? 1
            : num * factorialize(num - 1)
        : "Not a number"
};

console.log(factorialize(5))