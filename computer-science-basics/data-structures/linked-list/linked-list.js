import LinkedListNode from "./linked-list-node";
import Comparator from "../../utils/comparator";

export default class LinkedList {
    constructor(comparatorFunction) {
        this.head = null;
        this.tail = null;

        this.compare = new Comparator(comparatorFunction);
    }

    append(value) {
        const newNode = new LinkedListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;

            return this;
        }

        this.tail.next = newNode; // append to the exisitng tail which is the last element
        this.tail = newNode; // update the new tail

        return this;
    }

    prepend(value) {
        const newNode = new LinkedListNode(value, this.head);

        this.head = newNode; // update the new head

        if (!this.tail) { // no tail means only one element is there, so head and tail are same
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

        while (this.head && this.compare.equal(this.head.value, value)) {
            deletedNode = this.head;
            const newHead = this.head.next;
            this.head = newHead;
        }

        let currentNode = this.head;

        while (currentNode && currentNode.next) {
            if (this.compare.equal(currentNode.next.value, value)) {
                deletedNode = currentNode.next;

                if (!currentNode.next.next) { // to check if it is tail
                    currentNode.next = null;
                    this.tail = currentNode;
                    break;
                }
                currentNode.next = currentNode.next.next;
                
                
            } else {
                currentNode = currentNode.next;
            }
            
        }
        return deletedNode;
    }

    find ({value = undefined, callback = undefined}) {
        if(!this.head) {
            return null;
        }
        let currentNode = this.head;

        while (currentNode) {

            if (callback && callback(currentNode.value)) {
                return currentNode;
            }

            if (value !== undefined && this.compare.equal(currentNode.value, value)) {
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

    reverse() {
        let currentNode = this.head;

        let previousNode = null;
        let nextNode = currentNode.next;

        while(currentNode) {
            nextNode = currentNode.next;

            currentNode.next = previousNode;


            previousNode = currentNode;
            currentNode = nextNode;
        }
        
        this.tail = this.head;
        this.head = previousNode;
    }
}