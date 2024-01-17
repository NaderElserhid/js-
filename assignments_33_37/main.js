// // Test Case 1
// let num1 = 9; // "009"

// if (num1 < 10){
// console.log( "00"+num1 );
// };

// // Test Case 2
// let num2 = 20; // "020"

// if (num2 > 10 && num2 < 100){
//     console.log( "0"+num2 );
//     };

// // Test Case 3
// let num3 = 110; // "110"

// if (num3 >= 100){ 
//     console.log(num3);
//     };



//  let num4 = 9;
// let str = "9";
// let str2 = "20";


// if (num4 == str)  {
// console.log(`${num4} Is The Same Value As ${str} `);
// }

// if (typeof num4 !== typeof str)  {
// console.log(`${num1}  Is The Same Value As ${str} But Not The Same Type `);
// }

// if (num4 !== str2){
//     if(typeof num4 !==  typeof str2){
//         console.log(`${num4}  Is not  The Same Value or the same type ${str2}  `);
//     }
// }

// if (typeof str === typeof str2){
//     if ( str !== str2){

//         console.log(`${str} Is The Same type as  ${str2} but the same value `);
//     }
  
// }


// Output
"{num1} Is The Same Value As {str}"
"{num1} Is The Same Value As {str} But Not The Same Type"
"{num1} Is Not The Same Value Or The Same Type As {str2}"
"{str} Is The Same Type As {str2} But Not The Same Value"



// let num10 = 10;
// let num30 = 30;
// let numstr = "30";


// if(numstr > num10 && typeof num10 !== typeof numstr){
// console.log("30 Is Larger Than 10 And Type string Not The Same Type As number")
// }

// if(numstr > num10 && num30  == numstr && typeof num30 !== typeof numstr ){
//     console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");
// }

// if(num10 !== numstr && typeof num10 !== typeof numstr && typeof num30 !== typeof numstr){
//   console.log("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}")
// }
// // Needed Output
// "30 Is Larger Than 10 And Type string Not The Same Type As number"
// "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
// "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"



// // Edit What You Want Here

// let num1 = 7;
// let num2 = 5;
// let num3 =7;
// let num4 = 30;

// /*
//   Do Not Edit Below This Line
//   Needed Output
//   True 7 Times
// */

// // Condition 1

// if (num1 > num2) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 2

// if (num1 > num2 && num1 < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 3

// if (num1 > num2 && num1 === num3) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 4

// if ((num1 + num2) < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 5

// if ((num1 + num3) < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 6

// if ((num1 + num2 + num3) < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 7

// if (num4 - (num1 + num3) + num2 === 21) {
//   console.log("True");
// } else {
//   console.log("False");
// }


// let a = 40;

// if(a < 20){
//   console.log(10);
// }else if(a >= 10 && a <= 40 ){
//   console.log( "10 to 40");
// }else if (a> 40){
//  console.log(" >40 ")
// }else{
//   console.log("unknown")
// };

// let b = 6;

// (b < 60 ) 
// ? console.log(` ${b}  is smoller than 60`) 
// :(b = 60) 
// ? console.log(`${b} = 60`) 
// : (b > 60) 
// ?  console.log(`${b} is larger than 60 `)
// :console("unknown");


let st = "Elzero Web School";

if((st.length * 2).toString() ===  "34"){
  console.log("Good")
}
if (st[st.indexOf("W")].toLowerCase() === "w"){
  console.log("Good")
}
if ( typeof +st  !== "string") {
  console.log("Good");
}
if ( typeof (st.length) === "number") {
  console.log("Good");
}
if( st.slice(0,6).repeat(2) === "ElzeroElzero"){
  console.log("Good");
}