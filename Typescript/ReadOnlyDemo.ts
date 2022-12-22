const pie=3.142;
pie=56; // can not change value

class Circle{
    readonly radius:number;
     static readonly pie=3.142;
    constructor(radius=0){
        this.radius=radius;
    }

   
}
class SemiCircle extends Circle{

    
    
}

let circle1=new Circle(4);
console.log(circle1.radius);
circle1.radius=5; // not allowed , can not reinitialize
let circle2=new Circle(7);
circle2.radius=8; // not allowed , can not reinitialize
console.log(Circle.pie);
Circle.pie=3.14; // can not change value

