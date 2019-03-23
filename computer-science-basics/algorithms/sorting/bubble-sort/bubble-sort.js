const Sort = require('../sort');

class BubbleSort extends Sort {
  sort(originalArray) {
    const array = [...originalArray]; // clone it so that original array is unmodified

    let swapped = false;
    const arrLength = array.length;

    for (let i = 1; i < arrLength; i += 1) {
      swapped = false;

      // Call visiting callback.
      this.callbacks.visitingCallback(array[i]);

      for (let j = 0; j < arrLength - i; j += 1) {
        // Call visiting callback.
        this.callbacks.visitingCallback(array[j]);

        if (this.comparator.lessThan(array[j + 1], array[j])) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]]; // swap
          swapped = true;
        }
      }

      if (!swapped) { // sorting is completed
        return array;
      }
    }

    return array;
  }
}

module.exports = BubbleSort;
