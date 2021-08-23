import { getMessage } from "../src/sayhi";

describe("check hello world message", () => {
  it("should return 'Hi, World!')", () => {
    expect(getMessage()).toBe('Hi, World!');
  });
});