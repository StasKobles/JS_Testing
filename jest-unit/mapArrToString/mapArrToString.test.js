const mapArrToStrings = require("./mapArrToString");

describe("mapArrToStrings", () => {
  test("Correct value", () => {
    expect(mapArrToStrings([1, 2, 3])).toEqual(["1", "2", "3"]);
  });
  test("A mess", () => {
    expect(mapArrToStrings([1, 2, 3, null, undefined, "asfasf"])).toEqual([
      "1",
      "2",
      "3",
    ]);
  });
  test("Empty array", () => {
    expect(mapArrToStrings([])).toEqual([]);
  });
  test("Deny", () => {
    expect(mapArrToStrings([1, 2, 3])).not.toEqual([1, 2, 3, 4]);
  });
});
