"use strict";
exports.__esModule = true;
var hi_1 = require("../src/hi");
describe("test hi function", function () {
    it("should return 'Hi, World!')", function () {
        expect(hi_1.hi()).toBe('Hi, World!');
    });
});
