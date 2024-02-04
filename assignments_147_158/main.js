// first way to creat an object
let obj = {
  name: "nadir",
  cuntry: "Syrai",
  age: 23,
  lastName: "Elserhid",
  getFullName: function () {
    return `your fill name is ${this.name} ${this.lastName} your age is ${this.age}`;
  },
};
console.log(obj.getFullName());
console.log(obj.name);
console.log(obj["cuntry"]);

// Second way to creat an object
let obj2 = new Object();

obj2.hieght = 57;
obj2.lenght = 150;
obj2["wight"] = 350;

console.log(obj2.hieght);
console.log(obj2["wight"]);

// threed way to creat an object

let mainObject = {
  age: 23,
  fullName: "maher Elsalhani",
  male: true,
};

let copyMain = Object.create(mainObject);

copyMain.age = 27;
copyMain.male = false;

console.log(copyMain.age);
console.log(copyMain.male);
console.log(mainObject.age);
console.log(mainObject.male);

// with assing way

let sur1 = {
  prap1: "value1",
  prap2: "value2",
};
let sur2 = {
  prap3: "value3",
  prap4: "value4",
};

let targ = {
  prap5: "value5",
};

Object.assign(targ, sur1, sur2, { prap6: "value6" });
console.log(targ);

// for in loop

let objForloop = {
  age: 40,
  userName: "mohamed noor",
  gander: "male",
};

for (const key in objForloop) {
  console.log(`${key}  => ${objForloop[key]}`);
}
console.log("#".repeat(40));
// constructor function

function Phone(serail, color, price) {
  this.serail = serail;
  this.color = color;
  this.price = price - 100;
}

let phone1 = new Phone(123, "red", 300);
let phone2 = new Phone(372, "black", 400);
let phone3 = new Phone(812, "whit", 700);

console.log(phone1);
console.log(phone2);
console.log(phone3);

console.log("#".repeat(40));

// add prapertys

function User(name) {
  this.name = name;
  this.welcome = function () {
    return `welcome ${this.name}`;
  };
}

let user1 = new User("nadir");
let user2 = new User("kalit");

User.prototype.addTitile = function () {
  return `Mr. ${this.name} `;
};

console.log(User.prototype);

String.prototype.addZero = function (wight) {
  let theRsilt = this;
  while (theRsilt.length < wight) {
    theRsilt = `0${theRsilt}`;
  }
  return theRsilt;
};

String.prototype.SayYouloveMy = function () {
  namelength = this.length;
  let i = 0;
  let theRsilt = [];
  while (i < namelength) {
    theRsilt[i++] = `I love you ${this}`;
  }
  return theRsilt;
};
console.log("13".addZero(5));
console.log("188".addZero(5));
console.log("1999".addZero(5));
console.log("nadirElserhid".SayYouloveMy());
console.log(String.prototype);

console.log("#".repeat(40));

// class in js

class Employe {
  constructor(name, sername, age) {
    this.name = name;
    this.age = age;
    this.sername = sername;
  }
  showInfo() {
    return `the Employe name is ${this.name} ${this.sername} the age is ${this.age}`;
  }
}

let emp = new Employe("maher", "Elsalhany", 22);
let emp2 = new Employe("nadir", "Elserhid", 22);

console.log(emp.showInfo());

// inheritance class in js

class Employes {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayhello() {
    return `hello from perant class`;
  }
}

class Emp extends Employes {
  static cunter = 0;
  constructor(name, age) {
    super(name, age);
    Emp.cunter++;
  }
  sayhello() {
    return `hello from chiled class`;
  }
  static displayCunter() {
    return `number of created objects is ${this.cunter}`;
  }
}
let nadirEmp = new Emp("nadir", 23);
let nadirEmp1 = new Emp("nadir", 23);
let nadirEmp2 = new Emp("nadir", 23);
let nadirEmp3 = new Emp("nadir", 23);

console.log(nadirEmp.sayhello());
console.log(Emp.displayCunter());

console.log("#".repeat(40));

// Object.defineProperty descriptor

let cars = {
  a: 1,
  b: 2,
};

// to add a new property to the object
Object.defineProperty(cars, "c", {
  writable: true,
  enumerable: true,
  configurableL: true,
  value: 3,
});

console.log(cars);

console.log("#".repeat(40));

// Object.definePropertys and ather mathoods

let hoom = {
  a: 10,
  b: 20,
  c: 30,
};

// to add a new propertys to the object

Object.defineProperties(hoom, {
  g: { writable: false, enumerable: true, configurableL: false, value: 9 },
  m: { writable: true, enumerable: true, configurableL: false, value: 19 },
});
console.log(Object.getOwnPropertyDescriptors(hoom));
console.log(Object.getOwnPropertyNames(hoom));

console.log("#".repeat(40));

// pravit propertys

class Animals {
  #typ;
  constructor(name, age) {
    this.name = name;
    this.#typ = age;
  }
}
class cat extends Animals {
  constructor(name, age) {
    super(name, age);
  }
}

let cat1 = new cat("hoho", 33);

console.log(cat1);
