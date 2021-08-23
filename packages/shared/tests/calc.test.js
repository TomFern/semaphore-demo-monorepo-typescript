"use strict";
exports.__esModule = true;
var calc_1 = require("../src/calc");
describe("test add function", function () {
    it("should return 20 for add(20,5)", function () {
        expect(calc_1.add(20, 5)).toBe(25);
    });
    it("should return 6 for add(1,5)", function () {
        expect(calc_1.add(1, 5)).toBe(6);
    });
});
