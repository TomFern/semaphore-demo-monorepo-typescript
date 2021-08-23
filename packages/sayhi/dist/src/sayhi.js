"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printMessage = exports.getMessage = void 0;
var shared_1 = require("shared");
function getMessage() {
    return shared_1.hi();
}
exports.getMessage = getMessage;
function printMessage(message) {
    console.log(message);
}
exports.printMessage = printMessage;
printMessage(getMessage());
