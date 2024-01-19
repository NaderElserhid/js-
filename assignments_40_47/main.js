let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
myFriends.pop()
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.lastIndexOf();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];





let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends.pop();

friends.shift();

 console.log(friends); // ["Eman", "Osama"]


let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

finalArr = arrOne.concat(arrTwo).sort().reverse();

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]







let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(`${words[website.length][0][website.length].toLocaleUpperCase()}${words[website.length][0][0]}${words[website.length][0][website.length + website.length ].toUpperCase()}${words[website.length][website.length][website.length + website.length].toUpperCase()}${words[+website.includes("Go")][0].toUpperCase()}`); // ZEROf






let needle = "JS";
let haystack = ["PHP", "JS", "Python"];




if(true === (haystack.includes("JS"))){
    console.log("Found");
}

if(true === (haystack.includes("JS"))){
    console.log("Found");
}

if(true === (haystack.includes("JS"))){
    console.log("Found");
}



let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs =`${arr2[arr1.length + arr1.lastIndexOf()].toLowerCase()}${arr1.pop().toLowerCase()}${arr2.pop().toLowerCase()} `

//${arr2[arr1.length].toLowerCase()}

console.log(allArrs); // fxy







let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];


// my.pop(),my.pop();
// my = my.reverse();
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];



console.log( my.slice(+Array.isArray(my),counter).reverse()); // ["Elham", "Mazero"]


console.log(`${my [counter - +Array.isArray(my)].slice(zero,counter - +Array.isArray(my) )}${my[+Array.isArray(my)].slice(counter - +Array.isArray(my),my.length).toLowerCase()}`); // "Elzero"


console.log(`${my[+Array.isArray(my)].slice(counter + +Array.isArray(my),-+Array.isArray(my))}${my[+Array.isArray(my)].slice(-+Array.isArray(my)).toUpperCase()}`); // "rO"



// تم بحمد الله 
