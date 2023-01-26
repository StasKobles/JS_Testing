const validateValue = require("./validateValue");

test("Validate value", () => {
  expect(validateValue(50)).toBe(true);
});

describe("validateValue", () => {
  test("Correct value", () => {
    expect(validateValue(50)).toBe(true);
  });
  test("Less then correct", () => {
    expect(validateValue(-1)).toBe(false);
  });
  test("More than correct", () => {
    expect(validateValue(101)).toBe(false);
  });
  test("Down border value", () => {
    expect(validateValue(0)).toBe(true);
  });
  test("Upper border value", () => {
    expect(validateValue(100)).toBe(true);
  });
});
