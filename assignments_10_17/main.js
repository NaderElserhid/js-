// Add Variables Here
var NumberOne=10;
var NumberTwo= 20;
// Ouput
console.log(NumberOne,NumberTwo); // Normal Concatenate => 1020
console.log(typeof NumberOne); // Normal Concatenate => String
console.log(` ${NumberOne} ${NumberTwo}`); // Template Literals Way => 1020
console.log(typeof NumberTwo ,typeof NumberOne ); // Template Literals Way => String

console.log(NumberOne +  "\n"+ NumberTwo );
/*
  Normal Concatenate
  20
  10
*/

console.log(`${NumberTwo} \n${NumberTwo}  `);
/*
  Template Literals Way
  20
  10
*/
console.log("elzero".innerHTML); // object
console.log(typeof elzero); // object


console.log("\`I\'m In\n\\\\\nlove \\\\ \"\"\" \'\'\'\n++ with ++\n\\\"\"\"\\\"\"\"\n\"\"JavaScript\"\"\`\` " ); // object


// the last assngiment

let a = 21;
let b = 20;

console.log("_" +a +"_"+b+ "" +a+"_"+b+"" +a,"_"+b+a+"_"+b+"_"); // _21_2021_2021_2021_20_