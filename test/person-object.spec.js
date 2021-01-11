const assert = require("assert");
const Person = require("../js/intermediate-algorithm-scripting/person-object");

describe('Person class', () => {
  var bob = new Person('Bob Ross');

  it('a new Person should have six keys when instantiated', () => {
    assert.strictEqual(Object.keys(bob).length, 6)
  });
  it('a var made from Person should be an instance of the Person object', () => {
    assert.strictEqual(bob instanceof Person, true);
  });
  it('should return undefined if firstName var gets accessed directly', () => {
    assert.strictEqual(bob.firstName, undefined);
  });
  it('should return undefined if lastName var gets accessed directly', () => {
    assert.strictEqual(bob.lastName, undefined);
  });
  it('should return Bob when getFirstName is invoked', () => {
    assert.strictEqual(bob.getFirstName(), "Bob");
  });
  it('should return Ross when getLastName is invoked', () => {
    assert.strictEqual(bob.getLastName(), "Ross");
  });
  it('should return Bob Ross when getFullName is invoked', () => {
    assert.strictEqual(bob.getFullName(), "Bob Ross");
  });
  it('getFullName should return Haskell Ross after invoking setFirstName("Haskell")', () => {
    bob.setFirstName("Haskell");
    assert.strictEqual(bob.getFullName(), "Haskell Ross");
  });
  it('getFullName should return Haskell Curry after invoking setLastName("Curry")', () => {
    bob.setLastName("Curry");
    assert.strictEqual(bob.getFullName(), "Haskell Curry");
  });
  it('getFirstName should return John after invoking setFullName("John Doe")', () => {
    bob.setFullName("John Doe");
    assert.strictEqual(bob.getFirstName(), "John");
  });
  it('getLastName should return "Doe"', () => {
    assert.strictEqual(bob.getLastName(), "Doe");
  });
  it('getFirstName should return "Taylor Elizabeth" after invoking setFirstName("Taylor Elizabeth")', () => {
    bob.setFirstName("Taylor Elizabeth");
    assert.strictEqual(bob.getFirstName(), "Taylor Elizabeth");
  });
  it('getLastName should return "Doe" after invoking setFirstName("Taylor Elizabeth")', () => {
    assert.strictEqual(bob.getLastName(), "Doe");
  });
  it('getFullName should return "Taylor Elizabeth Doe" after invoking setFirstName("Taylor Elizabeth")', () => {
    assert.strictEqual(bob.getFullName(), "Taylor Elizabeth Doe");
  });
});
