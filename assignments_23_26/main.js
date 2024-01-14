// Examples
// console.log(100_000); // 100000
// console.log(100000); // 100000
// console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(1_000_000); // 100000
console.log(10*10*10*10*10*10); // 100000
console.log(1000**2); // 100000
console.log(10**6); // 100000
console.log(1e6); // 100000
console.log(100*100*100); // 100000
console.log(1_00_00_00); // 100000
console.log(1000**2); // 100000
console.log(1e3*1e3); // 100000
console.log(100e4); // 100000




console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991



console.log(Number.MAX_SAFE_INTEGER % 25); // 16 


let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(+parseFloat(myVar).toFixed(2)); // 100.57



let num = 10;

console.log( +Number.isInteger(num) +Number.isInteger(num)); // 2



let flt = 10.4;

console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(+parseFloat(flt).toFixed()); // 10


console.log(Math.floor((Math.random()*4)+1),Math.floor((Math.random()*4)+1),Math.floor((Math.random()*4)+1),Math.floor((Math.random()*4)+1)); // 0 || 1 || 2 || 3 || 4

let a=1_00;
let b=2_00.5;
let c=1e2;
let d=2.4;

console.log(Math.trunc(Math.min(a,b,c,d)));
console.log(Math.pow(a,parseInt(b)/a));



console.log(parseInt(d));
console.log(Math.trunc(d));
console.log(Math.floor(d));
console.log(Math.round(d));


console.log(((Math.trunc(b) / Math.ceil(d)).toFixed(2)));  //66.67
console.log(+((Math.trunc(b) / Math.ceil(d)).toFixed()));  //66