const Comparator = require('../../utils/comparator');

class Heap {
  constructor(comparator) {
    if (new.target === Heap) {
      return TypeError('Cannot instantiate Heap class directly');
    }
    this.compare = new Comparator(comparator);
    this.heapContainer = [];
  }

  peek() {
    if (this.heapContainer.length === 0) {
      return null;
    }

    return this.heapContainer[0];
  }

  isEmpty() {
    return !this.heapContainer.length;
  }

  hasLeftChild(index) {
    return Heap.getLeftChildIndex(index) < this.heapContainer.length;
  }

  hasRightChild(index) {
    return Heap.getRightChildIndex(index) < this.heapContainer.length;
  }

  static getLeftChildIndex(index) {
    return (index * 2) + 1;
  }

  static getRightChildIndex(index) {
    return (index * 2) + 2;
  }

  leftChild(index) {
    return this.heapContainer[Heap.getLeftChildIndex(index)];
  }

  rightChild(index) {
    return this.heapContainer[Heap.getRightChildIndex(index)];
  }

  static hasParent(currentIndex) {
    return Heap.getParentIndex(currentIndex) >= 0;
  }

  parent(index) {
    return this.heapContainer[Heap.getParentIndex(index)];
  }

  static getParentIndex(currentIndex) {
    return Math.floor((currentIndex - 1) / 2);
  }

  add(item) {
    this.heapContainer.push(item);
    this.heapifyUp();
    return this;
  }

  poll() {
    if (this.isEmpty()) {
      return null;
    }

    if (this.heapContainer.length === 1) {
      return this.heapContainer.pop();
    }

    const item = this.heapContainer[0];

    this.heapContainer[0] = this.heapContainer.pop();
    this.heapifyDown();
    return item;
  }

  heapifyUp(index) {
    let currentIndex = index || this.heapContainer.length - 1;

    while (Heap.hasParent(currentIndex)
        && !this.pairIsInCorrectOrder(this.parent(currentIndex), this.heapContainer[currentIndex])) {
      const parentIndex = Heap.getParentIndex(currentIndex);
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
    }
  }

  heapifyDown(customStartIndex = 0) {
    let currentIndex = customStartIndex;

    let nextIndex = null;
    while (this.hasLeftChild(currentIndex)) {
      if (this.hasRightChild(currentIndex)
        && this.pairIsInCorrectOrder(this.rightChild(currentIndex), this.leftChild(currentIndex))) {
        nextIndex = Heap.getRightChildIndex(currentIndex);
      } else {
        nextIndex = Heap.getLeftChildIndex(currentIndex);
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
    // const tmp = this.heapContainer[b];
    // this.heapContainer[b] = this.heapContainer[a];
    // this.heapContainer[a] = tmp;
  }

  static pairIsInCorrectOrder(a, b) {
    throw new Error(`should be implemented for checking order for${a} and ${b}`);
  }

  remove(item, comparator = this.compare) {
    const itemIndicesToRemove = this.find(item, comparator);

    for (let i = 0; i < itemIndicesToRemove.length - 1; i = 1 + 1) {
      const indexToRemove = itemIndicesToRemove.pop();

      // if the item to be remove is the last item then just popping the last element is enough
      if (indexToRemove === (this.heapContainer.length - 1)) {
        this.heapContainer.pop();
      } else {
        this.heapContainer[indexToRemove] = this.heapContainer.pop();

        const parent = this.parent(indexToRemove);
        if (this.hasLeftChild(indexToRemove)
          && (!parent || this.pairIsInCorrectOrder(parent, this.heapContainer(indexToRemove)))) {
          this.heapifyDown(indexToRemove);
        } else {
          this.heapifyUp(indexToRemove);
        }
      }
    }
    return this;
  }

  find(item, comparator = this.compare) {
    const foundItemIndices = [];

    for (let i = 0; i < this.heapContainer.length; i += 1) {
      if (comparator.equal(item, this.heapContainer[i])) {
        foundItemIndices.push(i);
      }
    }
    return foundItemIndices;
  }

  toString() {
    return this.heapContainer.toString();
  }
}

module.exports = Heap;
