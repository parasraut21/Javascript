/*
Primitive data types .
There are 7 primitive data types .
1)NULL
2)Number
3)string
4)symbol
5)Boolean
6)BigInt
7)undefined
// nn bb ss u

Nom Primitive data type.
1)Object -
are key value pair 
*/
let a = 12; //Number

let b = null; // null

let c = true; //Boolean

let d = BigInt("567") + BigInt("3"); //BigInt

let e = "Paras"; // string

let f = Symbol("Hii I am paras");

let g = undefined;

console.log(a, b, c, d, e, f, g);


// objects 
const item = {
    paras: "Raut",
    gidad: "69"
}
console.log(item); //{ paras: 'Raut', gidad: '69' }
console.log(item["paras"]); //raut
console.log(item["gidad"]); //69
console.log(item["gaurav"]); //undefined

console.log(item.gidad);

//tye of
console.log(typeof item);
console.log(typeof d);
console.log(typeof f);
console.log(typeof e);