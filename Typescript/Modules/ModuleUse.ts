import { Circle as Cir, Trainer } from "./MyModule/Utility";
import pi from './MyModule/Utility';

import * as col  from './MyModule/Collection';



let trainer =new Trainer(33,"Poonam",30);
console.log(trainer.getDetails());
let trainer2 =new Trainer();
console.log(trainer2.getDetails());
let ci=new Cir();

console.log(pi);


let book=new col.Book();
col.findNumber();