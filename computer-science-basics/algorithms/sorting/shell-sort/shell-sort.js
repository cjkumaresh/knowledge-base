import Sort from '../sort';

export default class ShellSort extends Sort {
    sort(originalArray) {
        let array = [...originalArray]; //1. clone the array

        let gap = Math.floor(array.length/2);

        while(gap > 0) {
            for (let i = 0; i < (array.length - gap); i++) {
                let currentIndex = i;
                let gapShiftedIndex = i + gap;

                while(currentIndex >=0) {
                    this.callbacks.visitingCallback(array[currentIndex]);
                    if (this.comparator.lessThan(array[gapShiftedIndex], array[currentIndex])) {
                        [array[currentIndex], array[gapShiftedIndex]] = [array[gapShiftedIndex], array[currentIndex]];
                    }
                    // console.log("array in while loop", array);
                    gapShiftedIndex = currentIndex;
                    currentIndex -= gap; // recursively we have to compare with the already sorted elements in the same gap interval
                }

                
            }
            gap = Math.floor(gap/2);
        }
        // console.log("final array", array);
        return array;
    }

}