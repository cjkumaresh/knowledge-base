import Comparator from "../../utils/comparator";

export default class Sort {
    constructor(callbacks) {
        this.callbacks = Sort.initSortCallbacks(callbacks);
        console.log(this.callbacks.compareCallback);
        this.comparator = new Comparator(this.callbacks.compareCallback);
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