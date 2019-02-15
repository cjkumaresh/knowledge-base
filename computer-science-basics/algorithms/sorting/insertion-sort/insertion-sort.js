import Sort from "../sort";

export default class InsertionSort extends Sort {
    sort(originalArray) {
        let array = [...originalArray];

        for (let i = 0; i < array.length - 1; i++) {
            let currentIndex = i;

            // the final sorted array (or list) is built with one item at a time. 
            for (let j = i; j > -1; j--) {
                if (array[j+1] < array[j]) {
                    [array[j], array[j+1]] = [array[j+1], array[j]];
                }
            }
        }
        console.log(array);
        return array;
    }
}