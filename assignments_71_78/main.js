// let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// // Elzero

// console.log(ele);

// let finalArray = mix.map(function(ele){
//     console.log(ele);
//     console.log(isNaN(ele));
//     return 0;
// })
// console.log(finalArray);

//=====================================================

// let mix = "A23QE4283"

// let numbers = mix.split("").filter(function (ele){
// return !(isNaN(parseInt(ele)));
// });

// console.log(numbers);

// let numbersclac = numbers.map(function (ele){
//     return ele * ele;
//     }).join("");
    

//     console.log(numbersclac);



//======================================================


// let thebigest = ["nadir", "moon", "ahmeeeed", "foood", "battery" ];

// let Newbigest =  thebigest.reduce(function (acc, acurent,index, arr){

//      return  acc.length > acurent.length ? acc : acurent;
// });
// console.log(Newbigest);

//======================================================

// let JousFrendiesStartA = ["nadir", "Aoon", "Ahmeeeed", "foood", "Aattery"];

// let JousFrendiesStartANEW = JousFrendiesStartA.filter(function (ele){
//     return ele.startsWith ("A");});

// console.log(JousFrendiesStartANEW);

//======================================================

// let  Numbers = [30,89,20,16,28,17];

// let EvenNumbers = Numbers.filter( function (ele){
// return ele % 2 === 0 ;
// });

// console.log(EvenNumbers);
//======================================================

// let myString = "EElllzzzzzzzeroo";

// // Elzero
// let MyNewString = myString.split("").filter((e, i)=>{
//   return e !== myString[i + 1] ? e : null;
// }).join("");

// console.log(MyNewString);
//======================================================
let myArray = ["E", "l", "z", ["e", "r"], "o"];

// Elzero

let NewArrsy = myArray
  .filter(function (ele) {
    return ele.toString();
  }).map(function(ele){
    return ele=== "," ;
  }).join("");

console.log(NewArrsy); 

//======================================================

// let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// let NewNum = numsAndStrings.filter(function(ele){
//     return !isNaN(parseInt(ele));
// }).map(function(ele){
//     return -ele;
// });
// console.log(NewNum);


// [-1, -10, 10, 20, -5, -3]

//======================================================

// let nums = [2, 12, 11, 5, 10, 1, 99];

// let NewNums = nums.reduce(function (Accumulator ,Current, index,arr) {
// console.log(`this is Accumulator ${Accumulator} `);
// console.log(`this is Current ${Current} `);
// console.log(`this is arr ${arr} `);
// console.log(`==============================`);
//   return Current % 2 === 0 ? Accumulator * Current : Accumulator + Current;
// }, 1);

// // 500
// console.log(NewNums);


let mySting2 = "1,2,3,EE,l,z,e,r,o,_,w,e,b,_,S,c,h,o,o,l,2,0,z";

let solustion = mySting2.split("").filter(function(ele){
  return true === !isNaN(ele) || ele === "_" ||ele === ","? "" : ele;
})
console.log(solustion);
console.log(solustion[0]);