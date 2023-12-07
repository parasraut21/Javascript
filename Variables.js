//Js allow you to change variable at run time .
//Numbers not allowed in js
/*
let - 1) can be updated but not redeclared .
      2) let is block scope .
      
      
var - 1) Can be updated and redeclared ;

const - 1) neither be updated nor be redeclared .
      
*/
console.log("****Variable scope****");
let a = 45; // 45
console.log(a);
a = "Paras Is Good Boi"; // Paras Is Good Boi
console.log(a);

//let is block scope .
console.log("****Let Block scope****");
let b = "Gidad Is Good Boi"; {
    let b = "Gidad Is A BAD BOI";
    console.log("Inside Of Block : ", b); //Gidad Is A BAD BOI
}

console.log("Outside Of block : ", b); //Gidad Is Good Boi


console.log("****var****");
var x = 45;
console.log(x); // 45
var x = 46;
console.log(x); // 46

console.log("****const****");
//const t; // we cannot initialised without no value ;
const t = 2; //some value should be given .