import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathCalcService {
  counter=0;
  constructor() { }

  mathAdd(...arr):number{
    let sum=0;
    for(let n of arr)
      sum=sum+n;
    return sum;
  }

  addCounter(){
    this.counter++;
    return this.counter;
  }
}
