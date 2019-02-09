export default class Comparator {
    constructor(comparatorFunction) {
        this.compare = this.comparatorFunction || Comparator.ComparatorFunction;
    }

    static ComparatorFunction (a, b){
        if (a === b) {
            return 0;
        }

        return (a < b) ? -1 : 1;
    }

    equal(a, b) {
        return this.compare(a, b) == 0;
    }

    greaterThan(a, b) {
        return this.compare(a, b) > 0;
    }

    lessThan(a, b) {
        return this.compare(a, b) < 0;
    }
}