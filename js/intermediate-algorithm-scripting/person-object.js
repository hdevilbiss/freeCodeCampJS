/**
 *
 * @param {String} firstAndLast
 * A Person function
 */
var Person = function(firstAndLast) {
  let fullName = firstAndLast;
  let firstName = fullName.split(" ")[0];
  let lastName = fullName.split(" ")[1];

  this.getFirstName = () => firstName;
  this.getLastName = () => lastName;
  this.getFullName = () => fullName;
  this.setFirstName = (name) => {
    firstName = name;
    this.setFullName(firstName + " " + lastName);
  }
  this.setLastName = (name) => {
    lastName = name;
    this.setFullName(firstName + " " + lastName);
  }
  this.setFullName = (name) => {
    fullName = name;
    let arr = fullName.split(" ");
    lastName = arr.pop();
    firstName = arr.join(" ");
  }
};

module.exports = Person;

var bob = new Person('Bob Ross');
console.log(bob.getFullName()); //Bob Ross
console.log(bob.getFirstName()); //Bob
console.log(bob.getLastName()); //Ross
bob.setFirstName("Lloyd");
console.log(bob.getFirstName()); //Lloyd
console.log(bob.getFullName()); //Lloyd Ross
bob.setFullName("Bob Albus DeVil");
console.log(bob.getFirstName()); // Bob Albus
console.log(bob.getFullName()); //expected Bob Albus DeVil
console.log(bob.getLastName()); //DeVil
bob.setLastName("Ross");
console.log(bob.getFullName()); // Bob Albus Ross
