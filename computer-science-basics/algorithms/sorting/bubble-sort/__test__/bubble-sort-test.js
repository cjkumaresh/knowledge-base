import BubbleSort from '../bubble-sort';
describe("BubbleSort", () => {
    it("should sort",() => {
        const sort = new BubbleSort();
        expect(sort.sort([3,2,1])).toEqual([1,2,3]);
    })
});