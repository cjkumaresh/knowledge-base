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
    const currentIndex = index || this.heapContainer.length - 1;

    while (this.hasParent(currentIndex) && !this.pairIsInCorrectOrder(this.getParentIndex(currentIndex), currentIndex)) {
      [this.heapContainer[this.getParentIndex(currentIndex)], this.heapContainer[currentIndex]] = [this.heapContainer[currentIndex], this.heapContainer[this.getParentIndex[currentIndex]]];
    }
  }
}
