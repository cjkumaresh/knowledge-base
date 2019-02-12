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
        if (!this.head) {
            return null;
        }

        let deletedNode = null;
        if(this.head.value === value) {
            deletedNode = this.head;
            this.head = this.head.next;
            return deletedNode;
        }

        let currentNode = this.head;

        while (currentNode.next) {
            if (this.compare.equal(currentNode.next.value, value)) {
                deletedNode = currentNode.next;
                currentNode.next = currentNode.next.next;
                return deletedNode; 
            }
            currentNode = currentNode.next;
        }
        return null;
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
        if (!this.head) {
            return null;
        }

        const deletedNode = this.head;

        if (this.head.next) {
            this.head = this.head.next;
        } else { // no tail
            this.head = null;
            this.tail = null;
        }

        return deletedNode;
    }

    deleteTail() {
        const deletedNode = this.tail;

        if (this.compare.equal(this.head, this.tail)) {
            this.head = null;
            this.tail = null;
            return deletedNode;
        }

        let currentNode = this.head;

        while(currentNode.next) {
            if (!currentNode.next.next) {
                currentNode.next = null;
            } else {
                currentNode = currentNode.next;
            }
        }

        this.tail = currentNode;

        return deletedNode;
    }
}