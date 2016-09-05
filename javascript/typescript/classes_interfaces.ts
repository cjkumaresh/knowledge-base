"use strict";

// Classes
class ListComponent {
    list: Array<ListItem>;
    constructor () {
        this.list = [];
    }
}

class ListItem {
    name: string;
    constructor (name: string) {
        this.name = name;
    }
}

const to_do_item = new ListItem("to-do"); // to_do_item.name = "to-do"

// Access Modifiers
class ListComponentPrivate {
    private list: ListItem[];
    constructor () {
        this.list = [];
    }
}

class ListItemPrivate {
    private name: string;
    constructor (name: string) {
        this.name = name;
    }
}

const to_do_item_private = new ListItemPrivate("to-do-private");
// to_do_item_private.name will be accessible only inside ListItemPrivate

//Getters
class ListComponentGetter {
    private _list: Array<ListItem>;
    constructor () {
        this._list = [];
    }
    get list () : Array<ListItem> {
        return this._list;
    }
}

class ListItemGetter {
    private _name: string;
    constructor (name: string) {
        this._name = name;
    }
    get name () : string {
        return this._name;
    }
}

const to_do_item_getter = new ListItemGetter("to-do-getter");
// to_do_item_getter.name is "to-do-getter";

// private methods
class ListComponentPrivateFunction {
    private _list: Array<ListItem>;
    constructor () {
        this._list = [];
    }
    get list (): Array<ListItem> {
        return this._list;
    }
    get length (): Number {
        return this._list.length;
    }

    add (item: ListItem) {
        this._list.push(item);
    }

    private remove () {
        this._list.pop();
    }
}

const listComponent = new ListComponentPrivateFunction();
listComponent.add(to_do_item);
// listComponent.remove(); // will throw error since it can't be accessible outside class

// Sub Classes
class SubListItem extends ListItem {
    private _summa: boolean;
    constructor (item: string, summa: boolean) {
        super(name);
        this._summa = summa;
    }
}

const subListItem = new SubListItem ("sub_to_do", true);
// subListItem.name will be accessible

// Shorthand for creating class
class ListCompoentShortHand {
    constructor (private _list: Array<ListItem>) {}
    get list (): Array<ListItem> { return this._list; }
}

// Interfaces
interface User {
    name: string;
    email: string;
    avatar?: Object;

    //API
    print (): void;
}

class RegisteredUser implements User {
    constructor (public name: string, public email: string) {}
    // constructor (name: string, email: string) {} will throw error, properties should be public

    print (): void {
        console.log(`Name: ${this.name} | Email: ${this.email} | No avatar`);
    }
}

class ImageUser implements User {
    constructor (public name: string, public email: string, public avatar: Object) {}

    print (): void {
        console.log(`Name: ${this.name} | Email: ${this.email} | Has Avatar`);
    }
}

const registeredUser = new RegisteredUser ("CJ", "cjkumaresh@gmail.com");
registeredUser.print();

// Mixins
class Printable {
    text: string;
    print (): void {
        console.log(`Text :${this.text}`);
    }
}

class Identifiable {
    name: string;
    id: number;

    identify(): void {
        console.log(`My name is :${this.name}, and ID is: ${this.id}`);
    }
}

class Book implements Printable, Identifiable {
    name: string;
    id: number;
    text: string;
    // using constructor Shorthand to declare is causing the comiler to generate duplicate code
    // need to raise issue in github
    constructor (name: string, id: number, text: string) {
        this.name = name;
        this.id = id;
        this.text = text;
    }
    identify (): void {}
    print (): void {}
}

applyMixins(Book, [Printable, Identifiable]);
const book = new Book("Learn TypeScript and confuse yourself in 5 minutes", 1, "written by CJ");
book.print();

// NECESSARY EVIL ::
//  From TS docs :: http://www.typescriptlang.org/docs/handbook/mixins.html
function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
