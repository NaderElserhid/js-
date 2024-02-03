// const size = [];
// const text = [];
// const data = [];
// console.log(size);

// for (let i = 15; i < 31; i++) {
//   size[i] = document.createElement("option");
//   text[i] = document.createTextNode(`${i}px`);

//   size[i].appendChild(text[i]);
//   document.querySelector(".sizs").appendChild(size[i]);
// }

// let div = document.querySelector(".main-2");

// let colors = document.querySelector(".colors");
// let fonts = document.querySelector(".fonts");
// let sizs = document.querySelector(".sizs");

// if (window.localStorage.color) {
//   console.log(window.localStorage.color);
//   div.style.color = window.localStorage.color;
//   document.getElementById("color-select").value = window.localStorage.color;
// }

// if (window.localStorage.fonts) {
//   console.log(window.localStorage.fonts);
//   div.style.fontFamily = window.localStorage.fonts;
//   document.getElementById("fonts-select").value = window.localStorage.fonts;
// }

// if (window.localStorage.sizs) {
//   console.log(window.localStorage.sizs);
//   div.style.fontSize = window.localStorage.sizs;
//   document.getElementById("sizs-select").value = window.localStorage.sizs;
// }

// colors.addEventListener("change", (e) => {
//   console.log(e.target.value);

//   const value = e.target.value;
//   localStorage.setItem("color", value);

//   div.style.color = value;
// });

// fonts.addEventListener("change", (e) => {
//   console.log(e.target.value);

//   const value = e.target.value;
//   localStorage.setItem("fonts", value);

//   div.style.fontFamily = value;
// });

// sizs.addEventListener("change", (e) => {
//   console.log(e.target.value);

//   const value = e.target.value;
//   localStorage.setItem("sizs", value);

//   div.style.fontSize = value;
// });

//=============================================================
let form = document.querySelector("form");
let firstName = document.querySelector("#first-name");
let LastName = document.querySelector("#last-name");
let age = document.querySelector("#age");
let car = document.querySelector("#cars");

form.style.cssText =
  "gap: 10px; display: flex;width: 300px;flex-direction: column;justify-content: center; margin: 40px auto;";
let first;
let last;
let ages;
  if (window.sessionStorage.first) {
    console.log("there is name");
  firstName.value = window.sessionStorage.first;
  } else {
    console.log("no");
  }
  if (window.sessionStorage.last) {
    console.log("there is last name");
    LastName.value = window.sessionStorage.last;
  } else {
    console.log("no");
  }
  if (window.sessionStorage.age) {
    console.log("there is age");
    age.value = window.sessionStorage.age;
  } else {
    console.log("no");
  }
  if (window.sessionStorage.car) {
    console.log("there car age");
    car.value = window.sessionStorage.car;
  } else {
    console.log("no");
  }

firstName.onblur = function () {
  console.log(this.value);
  window.sessionStorage.setItem("first", this.value);
};
LastName.onblur = function () {
  console.log(this.value);
  window.sessionStorage.setItem("last", this.value);
};
age.onblur = function () {
  console.log(this.value);
  window.sessionStorage.setItem("age", this.value);
};
car.onclick = function () {
  console.log(this.value);
  window.sessionStorage.setItem("car", this.value);
};
//=============================================================
//تم بحمد الله  