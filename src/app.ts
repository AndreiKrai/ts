class House {
    private tenants:string[]=[]
    public constructor( 
        private readonly type: string, //cant change outside/inside class
        protected street:string   
         ){ }

    public showAdress():void{console.log('Adress is' + this.street + '' + this.type)}
    public addTenant(name:string){this.tenants.push(name)}
    public showTenant():void{ console.log('Tenants'+ this.tenants);
    }
}

class StoneHouse extends House {
    private chargeOfTheHouse:string
    public constructor(
        street:string, 
        chief:string){
            super('stone',street);
            this.chargeOfTheHouse=chief}

    public showTenant():void{ 
        console.log('General'+ this.chargeOfTheHouse),
        super.showTenant() ;}        
    public showAdress():void{console.log('Adress is' + this.street +'new method')}

}
// const house = new House('Wood','Vygovskogo')
// const stoneHouse=new StoneHouse('Stecenka','Max')
// stoneHouse.showAdress()
// stoneHouse.addTenant('Ann')
// stoneHouse.addTenant('Nad')
// stoneHouse.showTenant()

abstract class Plane {
    protected pilotInCabin=false
    public sitInPlane(){this.pilotInCabin=true}
    public abstract startEngine() : string;
}

class Maize extends Plane {
    public startEngine(){return 'Ta-ta-ta'}
}
class Boeing extends Plane {
    public startEngine(){return 'Buuuuuuu'}
}
const boeing =new Boeing ;
const maize =new Maize

boeing.sitInPlane()
maize.sitInPlane()
console.log(boeing.startEngine());
console.log(maize.startEngine());

