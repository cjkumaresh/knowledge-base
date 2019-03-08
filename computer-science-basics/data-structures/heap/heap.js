import Comparator from '../../utils/comparator';

export default class Heap {
  constructor(comparator) {
    if (new.target === Heap) {
      return TypeError('Cannot instantiate Heap class directly');
    }
    this.compare = new Comparator(comparator);
    this.heapContainer = [];
  }

  hasParent(currentIndex) {
    return this.getParentIndex(currentIndex) >= 0;
  }

  static getParentIndex(currentIndex) {
    return Math.floor((currentIndex - 1) / 2);
  }

  add(item) {
    this.heapContainer.push(item);
    this.heapifyUp();
  }

  heapifyUp(index) {
    let currentIndex = index || this.heapContainer.length - 1;

    while (this.hasParent(currentIndex)
        && !this.pairIsInCorrectOrder(this.getParentIndex(currentIndex), currentIndex)) {
      const parentIndex = this.getParentIndex(currentIndex);
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
    }
  }

  swap(a, b) {
    [this.heapContainer[a], this.heapContainer[b]] = [this.heapContainer[b], this.heapContainer[a]]; // swap
  }
}
