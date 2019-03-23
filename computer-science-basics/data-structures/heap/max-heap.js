const Heap = require('./heap');

export default class MaxHeap extends Heap {
  pairIsInCorrectOrder(a, b) {
    return this.compare.greaterThanOrEqual(a, b);
  }
}

module.exports = MaxHeap;
