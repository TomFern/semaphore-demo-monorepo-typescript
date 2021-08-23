import { hi } from "../src/hi";

describe("test hi function", () => {
  it("should return 'Hi, World!')", () => {
    expect(hi()).toBe('Hi, World!');
  });
});
