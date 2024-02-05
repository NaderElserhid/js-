class Car {
  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
  }
  run() {
    return `Car Is Running Now `;
  }
  stop() {
    return `Car Is stopeed Now `;
  }
}

let car1 = new Car("MG", 2022, 420000);
let car2 = new Car("BMW", 2021, 900000);
let car3 = new Car("OO", 2020, 100000);

console.log(
  `Car One Name Is ${car1.n} And Model is ${car1.n} And Price is ${car1.p}`
);
console.log(car1.run());

// Needed Output

// ("Car One Name Is MG And Model Is 2022 And Price Is 420000");
// ("Car Is Running Now");
console.log("#".repeat(30));
//===================================================================

class Phone {
  constructor(name, serial, price) {
    this.name = name;
    this.serial = serial;
    this.price = price;
  }
}
class Tablet extends Phone {
  constructor(name, serial, price, size) {
    super(name, serial, price);
    this.size = size || "Unknown";
  }
  fullDetails() {
    return `${this.name} Serial ${this.serial} And Size Is ${this.size} `;
  }
}

let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown
console.log("#".repeat(30));
//===================================================================
// Edit The Class
class User {
  #c;
  constructor(username, card) {
    this.u = username;
    this.#c = card;
  }
  get showData() {
    // let card = this.#c;
    // let  ref = /\d{4}-\d{4}-\d{4}/g;
    // console.log(this.#c);
    return ` Hello ${this.u} Your Credit Card Number ${this.#c} `;
  }
}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined
console.log("#".repeat(30));
//===================================================================
String.prototype.addLove = function () {
  return `I love ${this} Web School`;
};

// Do Not Edit Below
let myStr = "Elzero";
console.log(myStr.addLove()); // I Love Elzero Web School

console.log("#".repeat(30));
//===================================================================
const myObj = {
  username: "Elzero",
  id: 100,
  score: 1000,
  country: "Egypt",
};

Object.defineProperty(myObj, "score", {
  writable: false,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(myObj, "id", {
  writable: true,
  enumerable: false,
  configurable: true,
});
Object.defineProperty(myObj, "country", {
  writable: true,
  enumerable: false,
  configurable: false,
});

myObj.score = 500;

for (let prop in myObj) {
  console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);

// Needed Output

// ("username => Elzero");
// ("score => 1000");
// {username: 'Elzero', score: 1000, id: 100}
// console.log("#".repeat(30));
//===================================================================
