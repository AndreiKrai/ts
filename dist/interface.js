"use strict";
class Pilot {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.checkAge();
    }
    checkAge() {
        if (this.age < 28) {
            throw new Error("Pilot to young");
        }
    }
    great(phrase) {
        console.log(phrase + '' + '' + this.name);
    }
    flyMessage() {
        console.log('We are going to Mayami!');
    }
}
class PlaneNew {
    sitInPlane(pilot) { this.pilot = pilot; }
}
class BoeingNew extends PlaneNew {
    startEngine() {
        if (!this.pilot) {
            throw new Error("No pilot in cabin");
        }
        console.log('Engine are lunching');
        this.pilot.flyMessage();
        return true;
    }
}
const pilot = new Pilot('Max', 32);
const boeingNew = new BoeingNew();
pilot.great('Hello everyone in our airlines im your pilot');
boeingNew.sitInPlane(pilot);
boeingNew.startEngine();
//# sourceMappingURL=interface.js.map