class PersonExercises {
    constructor( 
        public name:string,
        public age:number,
        public country:string){}
    showDetails():void{console.log('name'+' '+this.name+', '+'age'+' '+this.age+', '+'country'+' '+this.country);
    }
}
const pers1=new PersonExercises('Ann',12,'Ukraine')
const pers2=new PersonExercises('Joe',13,'Samui')

pers1.showDetails()
pers2.showDetails()

class Rectangle{
    constructor(
        private width:number,
        private height:number){}
    getPerimetr():number{return (this.width+this.height)*2}
    getSquare():number{return this.width*this.height}
}
class Vehicle{
    constructor(
        private make:string,
        private model:string,
        private year:number){}
    getVehikle():void{console.log(this.model,this.year,this.make)}
}
class Car extends Vehicle {
    constructor(make:string,model:string,year:number,private doors:number){ 
        super(make,model,year);}
    getVehikle():void{
        super.getVehikle();
        console.log(this.doors)
    }   
}