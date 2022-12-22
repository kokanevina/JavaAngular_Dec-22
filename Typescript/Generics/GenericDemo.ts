

// Array : generic

// Set : generic

//Map : generic

let arr1=[67,"hi",true,34,"hello"];
let arr2=new Array(67,5,23,78,56);
let arr3=new Array("hi","helo","welcome","bye");
let arr4=new Array(3);
arr4[0]="hi";
arr4[1]=67;
arr4[2]="hello"; 
arr4.push(56);
arr4.push("Welcome");
console.log(arr4);
arr4.pop();
console.log(arr4);
let arr5=new Array();
console.log(arr5.length);

let genericArray=new Array<String>();