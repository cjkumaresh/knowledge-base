import Heap from './heap';

export default class MaxHeap extends Heap {
  pairIsInCorrectOrder(a, b) {
    return this.compare.greaterThanOrEqual(a, b);
  }
}
