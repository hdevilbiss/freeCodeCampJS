const assert = require("assert");
const Person = require("../js/intermediate-algorithm-scripting/person-object");

describe('Person class', () => {
  var InstanceOfPerson;

  beforeEach(() => {
    InstanceOfPerson = new Person();
  });

  it('should have six keys when instantiated', () => {
    assert.strictEqual(Object.keys(InstanceOfPerson).length,6)
  });
  it('a var made from Person should be an instance of the Person object', () => {
    assert.strictEqual(InstanceOfPerson instanceof Person, true);
  });
});
