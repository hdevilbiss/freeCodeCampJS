/**
 *
 * @param {Object} request
 * @param {*} response
 * @param {Function} next
 * An example function to test Mocha unit testing.
 * Request simulates an Express Request.
 * Response simulates the HTTP response.
 * Next is a function.
 */
module.exports = (request, response, next) => {
  request.requestTime = Date.now();
  next();
};
