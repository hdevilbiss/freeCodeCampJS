const assert = require("assert");
const requestTime = require("../js/request-time");
describe("requestTime middleware test suite", function () {
    it("should add a `requestTime` property to the `request` parameter", function () {
        const request = {};
        requestTime(request, null, () => {});
        assert.ok(request.requestTime > 0);
    });
});
