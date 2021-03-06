/**
 *
 * @param {Array}
 * Given an array containing an object,
 * containing two keys: name and avgAlt,
 * Return an array with the object's name,
 * and its calculated orbital period.
 * @link https://en.wikipedia.org/wiki/Orbital_period
 */
const orbitalPeriod = (arr) => {
  let GM = 398600.4418;
  let earthRadius = 6367.4447;
  if (Array.isArray(arr)) {
    return arr.map(({name, avgAlt}) => {
      let newObj = {};
      newObj.name = (name)
        ? name
        : "";
      newObj.orbitalPeriod = (avgAlt)
        ? Math.round(2 * Math.PI * Math.sqrt(Math.pow((earthRadius + avgAlt), 3)/GM))
        : 0;
      return newObj;
    });
  }
  else {
    return [];
  }
}

module.exports = orbitalPeriod;
