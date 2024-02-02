// let setOfNumbers = new Set([10]);

// setOfNumbers.add(20);
// setOfNumbers.add(setOfNumbers.size);

// console.log(setOfNumbers);

// setOfNumbers.delete(20);
// console.log(setOfNumbers.size);
// Needed Output
// Set(3) {10, 20, 2}
// 2

//============================

// let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

// let myFriends1 = new Set(myFriends.sort());

// console.log(myFriends1);

// Needed Output
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']

//============================
// let myInfo = {
//   username: "Osama",
//   role: "Admin",
//   country: "Egypt",
// };

// let Newmap = new Map();

// Newmap.set("username", myInfo.username);
// Newmap.set("role", myInfo.role);
// Newmap.set("country", myInfo.country);

// console.log(Newmap);
// console.log(Newmap.size);
// console.log(Newmap.has("role"));

// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true
//============================
// let theNumber = 100020003000;

// console.log(theNumber.toString());

// console.log(Array.from(theNumber.toString(),(e) => e === "0" ? "" : e));

// let MoonMap = new Set(Array.from(theNumber.toString(),(e) => e === "0" ? "" : e));

// console.log(+Array.from(MoonMap).join(""));

// Needed Output
// 123
//============================
// let theName = "Elzero";

// console.log(Array.from(theName));

// console.log(theName.split(""));

// console.log([...theName]);

// console.log(Object.assign([], theName));

// console.log([...new Set(theName)]);

// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']
//============================

// Test

// let ArraY = [10, 20, 30, 40, 50, "A", "B"];
// // console.log(ArraY.copyWithin(1,-2));
// console.log(ArraY.copyWithin(1, -2, -1));

//============================

// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];

// console.log(chars.sort().copyWithin(0, 3, 6));



// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];

// console.log(chars.sort().copyWithin(0,4,8));

// Needed Output
// ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']


// let chars = ["Z", "Y", "A", "D", "E", 10, 1];

// console.log(chars.copyWithin(2));

// Needed Output
// ["Z", "Y", "Z", "Y", "A", "D", "E"]

//============================
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

// let AllNum = [...numsOne, ...numsTwo]; // way one

// console.log(AllNum);


// console.log(numsOne.concat(numsTwo)); // way two

// numsOne.push(...numsTwo) // three two

// console.log(numsOne);

// Needed Output
// [1, 2, 3, 4, 5, 6]

// const namse1 = ["nadir", "moon", "ali"];
// const names2 = ["ahmed", "maher", "noor"];

// names2.push(...namse1)

// console.log(names2);

//============================
// let n1 = [10, 30, 10, 20];
// let n2 = [30, 20, 10];


// console.log(Number(Math.max(...n1))*n1.push(...n2));

// Needed Output
// 210

//============================
