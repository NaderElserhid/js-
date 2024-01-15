let userName = "Elzero";
console.log(userName[0].toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.slice(0,1).toLowerCase()); // e
console.log(userName.slice(-6,1).toLowerCase()); // e
console.log(userName.split("l",1).toString().toLowerCase()); // e
console.log(userName.slice(-6,1).repeat(3).toLowerCase()); // eee

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterE)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True


// include this methods in your solution [ slice, charAt ]

let a = "Elzero Web School";


console.log(a.slice(2,6)); 


console.log(a.charAt(13).toUpperCase().repeat(8));


console.log(a.split(" ",1))


console.log(a.substr(0,6)+ " " + a.substr(-6,6));

console.log(a.length)

console.log(a[0].toLowerCase() + a.slice(1, -1).toUpperCase() + a[a.length - 1].toLocaleLowerCase());



