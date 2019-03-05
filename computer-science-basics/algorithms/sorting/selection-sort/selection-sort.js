import Sort from '../sort'

export default class SelectionSort extends Sort {
    sort(originalArray) {
        let array = [...originalArray];
        const arrayLength = array.length;
        let minIndex = 0;

        for (let i = 0; i < arrayLength - 1; i++) {
            minIndex = i;
            this.callbacks.visitingCallback(array[i]);

            for (let j = i + 1; j < arrayLength; j++){
                this.callbacks.visitingCallback(array[j]);

                if (this.comparator.lessThan(array[j], array[minIndex])) {
                    minIndex = j;
                }
               
            }

            // we have found a new smallest element in the array
            // and swap the element
            if (minIndex !== i) {
                [array[minIndex], array[i]] = [array[i], array[minIndex]];
            }
        }
        return array;
    }
}