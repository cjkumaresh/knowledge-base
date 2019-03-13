import Heap from './heap';

export default class MinHeap extends Heap {
  pairIsInCorrectOrder(a, b) {
    return this.compare.lessThanOrEqual(a, b);
  }
}
