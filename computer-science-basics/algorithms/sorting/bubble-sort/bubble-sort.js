import Sort from "../sort";

export default class BubbleSort extends Sort {
    sort(originalArray) {
        let array = [...originalArray]; // clone it so that original array is unmodified

        let swapped;
        const arrLength = array.length;

        for (let i = 0; i < arrLength; i++) {
            swapped = false;

            for (let j = 0; j < arrLength - i;j++) {
                if (array[j+1] < array[j]) {
                    [array[j], array[j+1]] = [array[j+1], array[j]]; //swap 
                    swapped = true;
                }
            }

            if (!swapped) { // sorting is completed
                return array;
            }
        }
    }
}

