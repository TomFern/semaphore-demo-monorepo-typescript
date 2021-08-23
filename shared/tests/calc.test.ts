import { add } from "../src/calc";

describe("test add function", () => {
  it("should return 20 for add(20,5)", () => {
    expect(add(20, 5)).toBe(25);
  });it("should return 6 for add(1,5)", () => {
    expect(add(1, 5)).toBe(6);
  });
});
