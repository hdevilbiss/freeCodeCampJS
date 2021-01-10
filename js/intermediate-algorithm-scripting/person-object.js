// export default class Person {
//   constructor(firstAndLast) {
//     this.firstAndLast = firstAndLast;
//   }
//   getFullName = () => {
//     return this.firstAndLast;
//   }
// }

var Person = function(firstAndLast) {
  constructor = () => {
    this.fullName = firstAndLast;
    this.firstName = firstAndLast.split(" ")[0];
    this.lastName = firstAndLast.split(" ")[1];
  };
  this.getFullName = () => {
    return this.fullName;
  };
  this.getFirstName = () => {
    return this.firstName;
  };
  this.getLastName = () => {
    return this.lastName;
  };
  this.setFullName = () => {
    this.fullName = firstAndLast;
  };
  this.setFirstName = () => {
    this.firstName = firstAndLast.split(" ")[0];
  };
  this.setLastName = () => {
    this.lastName = firstAndLast.split(" ")[1];
  };
};

var bob = new Person('Bob Ross');
console.log(bob.getFullName())
console.log(bob.getFirstName())
console.log(bob.getLastName())
