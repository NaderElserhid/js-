// let member ={
// name : "nadir",
// age : 25,
// conutry : "Syrai",
//  fullDetails: function () {
//  return `My name is ${this.name},My age is ${this.age} , I live in ${this.conutry}`;
// } 
// };
// console.log(member.name);
// console.log(member.age);
// console.log(member.conutry);
// console.log(member.fullDetails());


//==================================================================


// // Method One
// let objMethodOne = {
//   property: "objMethodOne"
// };

// console.log(objMethodOne.property); // "Method One"

// // Method Two
// let objMethodTwo = new Object ();
// objMethodTwo.property = "objMethodTwo";
// objMethodTwo.name = "name nadir";

// console.log(objMethodTwo.property); // "Method Two"
// console.log(objMethodTwo.name); // "Method Two"

// // Method Three

// function fun(property){
//   this.property = property;
// }
// let objMethodThree = new fun("objMethodThree");

// console.log(objMethodThree.property); // "Method Three"

// // Method Four
// let objMethodFourMain = {};

// let objMethodFour = Object.create(objMethodFourMain); 
// objMethodFour.property = "objMethodFour";


// console.log(objMethodFour.property); // "Method Four"


//==================================================================
// let a = 1;

// let threeNums = {
//   b: 2,
//   c: 3,
//   d: 4,
// };

// let twoNums = {
//   e: 5,
//   f: 6,
// };

// let finalObject = Object.assign({a},threeNums, twoNums);

// console.log(finalObject);

/*
  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
*/

//==================================================================

// The Object To Work With
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};

// Code One => How To Get Object Length ?
let objectLength = Object.keys(myFavGames);

for (let i = 0; i < objectLength.length; i++) {
  console.log(`The Game Name Is ${objectLength[i]}`);
  console.log(`The Publisher Is ${myFavGames[objectLength[i]].publisher}`);
  console.log(`The Price Is ${myFavGames[objectLength[i]].price}`);

  // Check If Nested Object Has Property (bestThree)
  if (i === 1 || i === 2) {
    console.log("- Game Has Releases");
    console.log(`First => ${myFavGames[objectLength[i]].bestThree.one}`);
    console.log(`Second => ${myFavGames[objectLength[i]].bestThree.two}`);
    console.log(`Third => ${myFavGames[objectLength[i]].bestThree.three}`);
  }
  console.log("#".repeat(20));
}

// Ouput

"The Game Name Is Trinity Universe"
"The Publisher Is NIS America"
"The Price Is 40"
"####################"
"The Game Name Is Titan Quest"
"The Publisher Is THQ"
"The Price Is 50"
"- Game Has Releases"
"First => Immortal Throne"
"Second => Ragnarök"
"Third => Atlantis"
"####################"
"The Game Name Is YS"
"The Publisher Is Falcom"
"The Price Is 40"
"- Game Has Releases"
"First => Oath in Felghana"
"Second => Ark Of Napishtim"
"Third => origin"
"####################"


// تم بحمد الله