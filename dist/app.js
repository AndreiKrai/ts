"use strict";
class House {
    constructor(type, street) {
        this.type = type;
        this.street = street;
        this.tenants = [];
    }
    showAdress() { console.log('Adress is' + this.street + '' + this.type); }
    addTenant(name) { this.tenants.push(name); }
    showTenant() {
        console.log('Tenants' + this.tenants);
    }
}
class StoneHouse extends House {
    constructor(street, chief) {
        super('stone', street);
        this.chargeOfTheHouse = chief;
    }
    showTenant() {
        console.log('General' + this.chargeOfTheHouse),
            super.showTenant();
    }
    showAdress() { console.log('Adress is' + this.street + 'new method'); }
}
class Plane {
    constructor() {
        this.pilotInCabin = false;
    }
    sitInPlane() { this.pilotInCabin = true; }
}
class Maize extends Plane {
    startEngine() { return 'Ta-ta-ta'; }
}
class Boeing extends Plane {
    startEngine() { return 'Buuuuuuu'; }
}
const boeing = new Boeing;
const maize = new Maize;
boeing.sitInPlane();
maize.sitInPlane();
console.log(boeing.startEngine());
console.log(maize.startEngine());
//# sourceMappingURL=app.js.map