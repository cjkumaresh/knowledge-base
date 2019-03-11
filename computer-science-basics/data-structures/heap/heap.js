import Comparator from '../../utils/comparator';

export default class Heap {
  constructor(comparator) {
    if (new.target === Heap) {
      return TypeError('Cannot instantiate Heap class directly');
    }
    this.compare = new Comparator(comparator);
    this.heapContainer = [];
  }

  isEmpty() {
    return !this.heapContainer.length;
  }

  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.heapContainer.length;
  }

  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.heapContainer.length;
  }

  static getLeftChildIndex(index) {
    return (index * 2) + 1;
  }

  static getRightChildIndex(index) {
    return (index * 2) + 2;
  }

  leftChild(index) {
    return this.heapContainer[this.getLeftChildIndex(index)];
  }

  rightChild(index) {
    return this.heapContainer[this.getRightChildIndex(index)];
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

  poll() {
    if (this.isEmpty) {
      return null;
    }
    const item = this.heapContainer[0];

    this.heapContainer[0] = this.heapContainer.pop();
    this.heapifyDown();
    return item;
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

  heapifyDown(customStartIndex = 0) {
    let currentIndex = customStartIndex;

    let nextIndex;
    while (this.hasLeftChild(currentIndex)) {
      if (this.hasRightChild(currentIndex)
        && this.pairIsInCorrectOrder(this.rightChild(currentIndex), this.leftChild(currentIndex))) {
        nextIndex = this.getRightChildIndex(currentIndex);
      } else {
        nextIndex = this.getLeftChildIndex(currentIndex);
      }

      if (this.pairIsInCorrectOrder(this.heapContainer[currentIndex], this.heapContainer[nextIndex])) {
        break;
      }

      this.swap(currentIndex, nextIndex);
      currentIndex = nextIndex;
    }
  }

  swap(a, b) {
    [this.heapContainer[a], this.heapContainer[b]] = [this.heapContainer[b], this.heapContainer[a]]; // swap
  }
}
