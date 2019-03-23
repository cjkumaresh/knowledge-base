const Sort = require('../sort');

export default class InsertionSort extends Sort {
  sort(originalArray) {
    const array = [...originalArray];

    for (let i = 0; i < array.length - 1; i += 1) {
      this.callbacks.visitingCallback(array[i]);
      // the final sorted array (or list) is built with one item at a time.
      for (let j = i; j > -1; j -= 1) {
        this.callbacks.visitingCallback(array[j]);
        if (array[j + 1] < array[j]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
      }
    }
    return array;
  }
}

module.exports = InsertionSort;
