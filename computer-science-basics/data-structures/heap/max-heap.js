const Heap = require('./heap');

class MaxHeap extends Heap {
  pairIsInCorrectOrder(a, b) {
    return this.compare.greaterThanOrEqual(a, b);
  }
}

module.exports = MaxHeap;

const maxHeap = new MaxHeap();
maxHeap.add(3);
maxHeap.find(3);

console.log(maxHeap.toString());
