let Numbers = "n1dsd7f6f5d#5d6#g@g!dshSFNAsd";

let bigAndSmallpr = /[A-Z]|[a-z]/g;
let notbigAndSmallpr = /[^A-Za-z]/g;
let specials = /[^A-Za-z0-9]/g;

console.log(Numbers.match(bigAndSmallpr));
console.log(Numbers.match(notbigAndSmallpr));
console.log(Numbers.match(specials));

//==================================================
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let validIp = /(\d+|\D+)+/g;
console.log(ip.match(validIp));
//==================================================
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let specialNamesRT = /\b(Os)\d*O/g;

console.log(specialNames.match(specialNamesRT));
// Output
// ['Os10O', 'OsO', 'Os100O']
//==================================================
let phone = "+(995)-123 (4567)";
let phoneRe = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/g;

console.log(phone.match(phoneRe));
//==================================================
let re1 = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

//==================================================
let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re = /\d{2}\s?-?\/?\s?\d{2}\/?\s?-?\s?\d{2,4}/g; // Write Pattern Here

console.log(date1.match(re)); // "25/10/1982"
console.log(date2.match(re)); // "25 - 10 - 1982"
console.log(date3.match(re)); // "25 10 1982"
console.log(date4.match(re)); // "25 10 82"
//==================================================
let url1 = "elzero.org";
let url2 = "http://elzero.org";
let url3 = "https://elzero.org";
let url4 = "https://www.elzero.org";
let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";

let re3 = /(https?:\/\/)?([\w]+\.)?([\w]+)\.\w+(:\.\w+)?\/?.*/i;

console.log(url1.match(re3));
console.log(url2.match(re3));
console.log(url3.match(re3));
console.log(url4.match(re3));
console.log(url5.match(re3));
//==================================================
