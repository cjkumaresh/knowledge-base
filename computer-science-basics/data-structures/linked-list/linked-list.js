import LinkedListNode from "./linked-list-node";
import Comparator from "../../utils/comparator";

export default class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;

        this.compare = new Comparator();
    }

    append(value) {
        const newNode = new LinkedListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;

            return this;
        }

        this.tail.next = newNode;
        this.tail = newNode;

        return this;
    }

    prepend(value) {
        const newNode = new LinkedListNode(value, this.head);

        this.head = newNode;

        if (!this.tail) {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        return this;
    }

    toArray() {
        const nodes = [];

        let currentNode = this.head;

        while (currentNode) {
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }

        return nodes;
    }

    fromArray(values = []) {
        values.map(value => this.append(value));
    }

    toString(callback) {
        return this.toArray().map(node => node.toString(callback)).toString();
    }

    delete(value) {
        let currentNode = this.head;

        while (currentNode) {
            if (this.compare.equal(currentNode.value, value)) {
                return currentNode;
            }
        }
        return this;
    }

    findByValue(value) {
        let currentNode = this.head;

        while (currentNode) {
            if (this.compare.equal(currentNode.value, value)) {
                return currentNode;
            }

            currentNode = currentNode.next;
        }

        return null;
    }

    deleteHead() {
        return this;
    }

    deleteTail() {
        return this;
    }
}