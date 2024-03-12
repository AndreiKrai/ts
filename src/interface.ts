interface IPerson{
    readonly name:string
    age:number
    great(phrase:string):void
}
interface Ipilot{
    flyMessage():void
}

class Pilot implements IPerson, Ipilot {
    constructor(public name:string,public age : number) {this.checkAge()}
    private checkAge( ){
        if(this.age <28){throw new Error("Pilot to young");
    }}
    great(phrase:string):void{
        console.log(phrase+''+''+this.name);
    }
    flyMessage():void{
        console.log('We are going to Mayami!');
 
    }
}
abstract class PlaneNew {
    protected pilot?:Ipilot
    public sitInPlane(pilot:Ipilot){this.pilot=pilot}
    public abstract startEngine() : boolean;
}


class BoeingNew extends PlaneNew {
    public startEngine(){
        if (!this.pilot) {
            throw new Error("No pilot in cabin");
        }
        console.log('Engine are lunching');
        this.pilot.flyMessage()
        return true}
}
const pilot = new Pilot ('Max', 32)
const boeingNew = new BoeingNew ()
pilot.great('Hello everyone in our airlines im your pilot')
boeingNew.sitInPlane(pilot)
boeingNew.startEngine()