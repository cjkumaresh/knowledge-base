import InsertionSort from "../insertion-sort";

describe("Insertion Sort", () => {
    it("", () => {
        const sort = new InsertionSort();
        expect(sort.sort([5, 7, 0, -1, 2, 4])).toEqual([-1, 0, 2, 4, 5, 7]);
    });
});