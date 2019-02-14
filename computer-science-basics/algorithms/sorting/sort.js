import Comprator from "../../utils/comparator";

export default class Sort {
    constructor(callbacks) {
        this.callbacks = Sort.initSortCallbacks(callbacks);
        this.comparator = new Comprator(this.callbacks.compareCallback);
    }

    static initSortCallbacks(originalCallbacks) {
        const callbacks = originalCallbacks || {};
        const stubVisitingCallback = () => {};
        
        callbacks.compareCallback = callbacks.compareCallback || undefined;
        callbacks.visitingCallback = callbacks.visitingCallback || stubVisitingCallback;

        return callbacks;
    }

    sort() {
        throw new Error('sort method must be implemented');
    }
}