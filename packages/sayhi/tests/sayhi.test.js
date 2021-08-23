"use strict";
exports.__esModule = true;
var sayhi_1 = require("../src/sayhi");
describe("check hello world message", function () {
    it("should return 'Hi, World!')", function () {
        expect(sayhi_1.getMessage()).toBe('Hi, World!');
    });
});
