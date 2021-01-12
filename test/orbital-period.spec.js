const assert = require("assert");
const orbitalPeriod = require("../js/intermediate-algorithm-scripting/orbital-period");

describe('orbitalPeriod function test suite', () => {
  var sputnik = orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
  var threeOrbits = orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);

  it('should return an array when given all information for 1 object', () => {
    assert.strictEqual(Array.isArray(sputnik), true);
  });
  it('should return an array when given all information for 3 objects', () => {
    assert.strictEqual(Array.isArray(threeOrbits), true);
  });
  it('should return an array when given no information', () => {
    assert.strictEqual(Array.isArray(orbitalPeriod()), true);
  });
  it('should return an orbitalPeriod of 86400 when provided an average altitude of 35873.5553', () => {
    assert.strictEqual(sputnik[0].orbitalPeriod, 86400);
  });
  it('should return 5557 for the orbitalPeriod of ISS', () => {
    assert.strictEqual(threeOrbits[0].orbitalPeriod, 5557);
  });
  it('should return 5734 for the orbitalPeriod of Hubble', () => {
    assert.strictEqual(threeOrbits[1].orbitalPeriod, 5734);
  });
  it('should return 2377399 for the orbitalPeriod of the Moon', () => {
    assert.strictEqual(threeOrbits[2].orbitalPeriod, 2377399);
  });
});
