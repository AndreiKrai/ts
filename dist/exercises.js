"use strict";
class PersonExercises {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    showDetails() {
        console.log('name' + ' ' + this.name + ', ' + 'age' + ' ' + this.age + ', ' + 'country' + ' ' + this.country);
    }
}
const pers1 = new PersonExercises('Ann', 12, 'Ukraine');
const pers2 = new PersonExercises('Joe', 13, 'Samui');
pers1.showDetails();
pers2.showDetails();
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getPerimetr() { return (this.width + this.height) * 2; }
    getSquare() { return this.width * this.height; }
}
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getVehikle() { console.log(this.model, this.year, this.make); }
}
class Car extends Vehicle {
    constructor(make, model, year, doors) {
        super(make, model, year);
        this.doors = doors;
    }
    getVehikle() {
        super.getVehikle();
        console.log(this.doors);
    }
}
//# sourceMappingURL=exercises.js.map