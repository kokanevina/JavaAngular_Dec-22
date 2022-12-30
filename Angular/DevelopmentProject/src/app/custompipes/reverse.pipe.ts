import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversestring'
})
export class ReversePipe implements PipeTransform {
  
  transform(value: string, ...args: any[]): string {
    console.log(args);  
    let reverseString="";
    for(let i=value.length-1;i>=0;i--){
  
      reverseString=reverseString+value.charAt(i);
    }
    //console.log(reverseString); 
    return args[0]+reverseString;
  }

}
