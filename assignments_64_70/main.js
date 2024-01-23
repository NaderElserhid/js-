// let NewName;
// let NewAge;
// let NewCountry;
// function getDetails(zName, zAge, zCountry) {
//     function namePattern(zName) {
//       // Write Your Code Here
//       zName =  zName.split(" ");
//       NewName = `${zName[0]} ${zName[1][0].toUpperCase()}.` ;
//       // Osama Mohamed => Osama M.
//       // Ahmed ali => Ahmed A.
//       return NewName;
//     }
//     function ageWithMessage(zAge) {
//       // Write Your Code Here
     
//       zAge =  zAge.split(" ");
//       let last = zAge.shift();
//       zAge.push(last);
//      NewAge = zAge.join();
//       // 38 Is My Age => Your Age Is 38
//       // 32 Is The Age => Your Age Is 32
//       return zAge.join(" ");
//     }
//     function countryTwoLetters(zCountry) {
//       // Write Your Code Here
//     NewCountry = zCountry.slice(0,2).toUpperCase();
//       // Egypt => You Live In EG
//       // Syria => You Live In SY
//       return NewCountry;
//     }
//     function fullDetails() {
//       // Write Your Code Here
//       return  `${namePattern(zName)} ,${ageWithMessage(zAge)}, You Live In ${countryTwoLetters(zCountry)} `
//     }
//     return fullDetails(); // Do Not Edit This
//   }
  
//   console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
//   // Hello Osama M., Your Age Is 38, You Live In EG
  
//   console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
//   // Hello Ahmed A., Your Age Is 32, You Live In SY




// ============================================



// let  itsMe = ()=> `Iam an Arrow Function`;
  


// console.log(itsMe()); // Iam an Arrow Function


// let urlCreate = (protocol, web, tld) => {
//   return `${protocol}://www.${web}.${tld}`;
// }

// console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org



// ============================================


// let  checker = (zName)  =>   {
//   return (status) => {
//     return (salary) => {
//       return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
//     };
//   };
// }

// console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
// console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble





// ============================================


// function specialMix(...data) {
//   let sum = 0;
// for(let  i = 0 ; i < data.length; i++ )
//    if(!isNaN(parseInt(data[i]))) sum += parseInt(data[i])
//   return sum || "all string"
// }

// console.log(specialMix(10, 20, 30)); // 60
// console.log(specialMix("10Test", "Testing", "20Cool")); // 30
// console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
// console.log(specialMix("Test", "Cool", "Test")); // All Is Strings

// console.log(parseInt("40asdas"));





// ============================================




let names = (...names) => `String [${names.join("],[")}] => Done !` ; 


console.log(names("nadir","mohamed","ali","Ibahim"));



// ============================================


let MyNumbers = [20,50,10,60];

let clac= (one ,two,...nums) => one + two + +nums ;


console.log(clac(10,MyNumbers[2],MyNumbers[3]));

//تم بحمد الله