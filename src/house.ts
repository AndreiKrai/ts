abstract class Building {
    tenants:Person[]=[]
    public door:boolean=false
   constructor(public key:Key){
   }
   public comeIn(person:Person){
    if (!this.door) {
        throw new Error("Dor is closed");
    }
    this.tenants.push(person)
   }
   abstract openDoor(key:Key):void
}

class MyBuilding extends Building{
    openDoor(key:Key){
        if (key!==this.key) { 
            throw new Error("The key doesnt pass");
        }
        else{}
    }
}

class Person {
    constructor(public key:Key) {
    }
    getKey():Key{return this.key}
}

class Key {
    constructor(public signature:number) {
        signature=this.generateSignature()
    }
    generateSignature():number{return Math.floor(Math.random() * (100 - 1 + 1)) + 1;}
    getSignature():number{return this.signature}
}