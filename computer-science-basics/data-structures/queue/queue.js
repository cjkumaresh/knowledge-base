import LinkedList from "../linked-list/linked-list";

export default class Queue {

    constructor() {
        this.linkedList = new LinkedList();
    }

    enqueue(value) {
        this.linkedList.append(value);
    }

    dequeue(value) {
        if (!this.linkedList.head) {
            return null;
        }

        const removedHead = this.linkedList.deleteHead(value);
        return removedHead.value;
    }

    peek() {
        if (!this.linkedList.head) {
            return null;
        }

        return this.linkedList.head.value;
    }

    isEmpty() {
        return !this.linkedList.head;
    }

    toString(callback) {
        return this.linkedList.toString(callback);
    }
}