"use strict";
class LocalStorage {
    constructor() {
        this.storage = {};
    }
    set(key, value) {
        this.storage[key] = value;
    }
    remove(key) {
        delete this.storage[key];
    }
    get(key) {
        return this.storage[key];
    }
    clear() {
        this.storage = {};
    }
}
const stringsStorage = new LocalStorage();
stringsStorage.get('name');
stringsStorage.set('hello', 'world');
const booleanStorage = new LocalStorage();
booleanStorage.get('xxx');
