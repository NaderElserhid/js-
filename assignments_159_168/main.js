let timeNow = new Date();
let MybirthDay = new Date(1998, 11, 1);
let diff = timeNow - MybirthDay;

console.log(timeNow);

console.log(diff);

// Needed Output

console.log((diff / 1000).toFixed()); // "1247939400 Seconds"
console.log((diff / 1000 / 60).toFixed()); // "20798990 Minutes"
console.log((diff / 1000 / 60 / 60).toFixed()); // "346650 Hours"
console.log((diff / 1000 / 60 / 60 / 24).toFixed()); // "14444 Days"
console.log((diff / 1000 / 60 / 60 / 24 / 12).toFixed()); // "481 Months"
console.log((diff / 1000 / 60 / 60 / 24 / 12 / 30).toFixed()); // "40 Years"

console.log("#".repeat(40));
//========================================================
// let timeAfterOnesecund =

// Needed Output

//"Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"
console.log("#".repeat(40));
//========================================================
let start = new Date();

for (let i = 1; i <= 99999; i++) {
  console.log();
}
let end = new Date();
let diffs = end - start;

console.log(diffs);

// "Loop Took 1921 Milliseconds."
console.log("#".repeat(40));
//========================================================
function* genNumbers() {
  yield* [1, 2, 2, 2, 3, 4, 5];
}
function* genLetters() {
  yield* ["A", "B", "B", "B", "C", "D"];
}
function* genAll() {}

let generator = genAll();

console.log(generator.next()); // {value: 1, done: false}
console.log(generator.next()); // {value: 2, done: false}
console.log(generator.next()); // {value: 3, done: false}
console.log(generator.next()); // {value: 4, done: false}
console.log(generator.next()); // {value: 5, done: false}
console.log(generator.next()); // {value: "A", done: false}
console.log(generator.next()); // {value: "B", done: false}
console.log(generator.next()); // {value: "C", done: false}
console.log(generator.next()); // {value: "D", done: false}
console.log("#".repeat(40));
//========================================================
// main.js File
//console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60

export const arr = [1, 2, 3, 4, 5, 6];

export function satHello() {
  return `hello`;
}
export default (a, b, c) => {
  return a + b + c;
};

//===========================================================


//===========================================================
