// let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
// let index = 0;
// let counter = 0;

// // Output
// "1 => Sayed"
// "2 => Mahmoud"

// while(counter < friends.length){

// if(typeof friends[counter] !== "number" && friends[counter][index] !== "A" ){

//     console.log(`${counter} =>${friends[counter]}`)
// }
//     counter++;
// }

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samer"];

let myEployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
];

for (let counter = 0; counter < myAdmins.length; counter++) {
  if (myAdmins[counter] === "Stop") {
    break;
  }
  document.write(` 
 <hr /> 
 <h3> the Admin for team ${counter + 1} is ${myAdmins[counter]} </h3>
 
 <div> <h1> Team Manegers: </h1>
`);
  let count = 1;
  for (let j = 0; j < myEployees.length; j++) {
    if (myAdmins[counter][0] === myEployees[j][0]) {
      document.write(`  
        <p> - ${count} ${myEployees[j]} </p>
        </div> `);
      count++;
    }
  }
}
