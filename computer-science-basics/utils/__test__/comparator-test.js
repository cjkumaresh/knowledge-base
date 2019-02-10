import Comparator from "../comparator";

describe("Comparator", function() {
    it("should return true if a,b are equal", function() {
      const comparator = new Comparator();
      expect(comparator.equal(1,1)).toBe(true);
    });
  });