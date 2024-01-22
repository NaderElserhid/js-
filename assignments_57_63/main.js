// function sayHello(theName, theGender = "") {
//   if(theGender === "Male" ){
//     console.log(`Hello Mr ${theName}`);
//   }else if(theGender === "Female") {
//     console.log(`Hello Miss ${theName}`);
//   }else{
//     console.log(`Hello ${theName}`);
//   }
// }

// // Needed Output
// sayHello("Osama", "Male"); // "Hello Mr Osama"
// sayHello("Eman", "Female"); // "Hello Miss Eman"
// sayHello("hana", "Female");
// sayHello("nadir", "Male");
// sayHello("Sameh"); // "Hello Sameh"



//==========================================



// function calculate(firstNum, secondNum, operation) {

//   if(secondNum === undefined || firstNum === undefined){

//     return console.log("one of the two numbers is missing ");

//   }else if(operation === undefined){

//    return console.log( firstNum + secondNum);

//   }else{
    
//     result =0;

//     switch (operation){
//     case "add":
//       result = firstNum + secondNum ;
//       break;
//     case "subtract":
//       result = firstNum - secondNum ;
//       break;
//     case "multiply":
//       result = firstNum * secondNum ;
//       break;
//       default:
//       console.log(` unvalabile operation valio`);
//   }
//   console.log(`${result}`)

// }
// }

// // Needed Output
// calculate(20); // Second Number Not Found
// calculate(20, 30); // 50
// calculate(20, 30, "add"); // 50
// calculate(20, 30, 'subtract'); // -10
// calculate(20, 30, 'multiply'); // 600


//==========================================



// function ageInTime(theAge) {
//   if(theAge < 10 || theAge > 100 ){
//     console.log(`the age is out of range`)
//   }else{
//    let result = 1; 
//      console.log(" your age in months is = " +theAge * 12);
//      console.log(" your age in weeks is = " +theAge * 12 * 4);
//      console.log(" your age in days is   = " +theAge * 12 * 30 * 24);
//      console.log(" your age in seconds is = " +theAge * 12 * 24 * 30 *60);
//   }
// }

// // Needed Output
// ageInTime(110); // Age Out Of Range
// ageInTime(38); // Months Example => 456 Months





//==========================================




// function checkStatus(a, b, c) {

//   let name;
//   let Number;
//   let Availablety;

//  (typeof a === "string") 
//  ? name = a
//  : (typeof a === "number")
//  ? Number = a
//  : (a === true)
//  ?  Availablety = ""
//  :  Availablety = "Not";

//  (typeof b === "string") 
//  ? name = b
//  : (typeof b === "number")
//  ?  Number = b
//  : (b === true)
//  ? Availablety = ""
//  : Availablety = "Not";

//  (typeof c === "string") 
//  ? name = c 
//  : (typeof c === "number")
//  ? Number = c 
//  : (c === true)
//  ? Availablety = ""
//  : Availablety = "Not";

//   console,console.log(`Hello ${name} Your Age Is ${Number} you Are ${Availablety} Available For Hire `);
// }

// // Needed Output
// checkStatus("nadir", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(38, "nadir", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(true, 32, "hana"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(false, "moon", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"







//==========================================






// function createSelectBox(startYear, endYear) {
 
// for( ;startYear<=endYear; startYear++){
// document.write(`<option value="${startYear} ">${startYear} </option>`)
// }

// }
// createSelectBox(2000, 2021);



//==========================================

// function multiply(...numbers){

// let result = 1;
//   for(let i = 0 ; i <numbers.length; i++){

//     if( typeof numbers[i] === "string"){
      
//   continue;
// }
// else{
//    Math.trunc(numbers[i])
// result *=Math.trunc(numbers[i]);
//   }
//  }
//  console.log(result);
// }

// multiply(10, 20); // 200
// multiply("A", 10, 30); // 300
// multiply(100.5, 10, "B"); // 1000


/// تم بحمد الله


