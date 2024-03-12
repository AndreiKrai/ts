"use strict";
class Building {
    constructor(key) {
        this.key = key;
        this.tenants = [];
        this.door = false;
    }
    comeIn(person) {
        if (!this.door) {
            throw new Error("Dor is closed");
        }
        this.tenants.push(person);
    }
}
class MyBuilding extends Building {
    openDoor(key) {
        if (key !== this.key) {
            throw new Error("The key doesnt pass");
        }
        else { }
    }
}
class Person {
    constructor(key) {
        this.key = key;
    }
    getKey() { return this.key; }
}
class Key {
    constructor(signature) {
        this.signature = signature;
        signature = this.generateSignature();
    }
    generateSignature() { return Math.floor(Math.random() * (100 - 1 + 1)) + 1; }
    getSignature() { return this.signature; }
}
//# sourceMappingURL=house.js.map