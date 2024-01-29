// window.alert("دير بالك على راسك");
// confirm("hello")
// prompt("hello")

// let set = setTimeout(sayhello,2000,"nadir");

// let btm = document.querySelector("button");

// console.log(btm);
// btm.onclick = function(){
// clearTimeout(set);
// }

// let tst = setInterval(sayhello, 2000, "nadir");

// function sayhello(user) {
//   console.log(` hello  ${user} ${tst} `);
// }

// console.log("1");

// setTimeout(() => {
//   console.log("2");
// }, 0);

// console.log("3");
//==========================================================
// let theValues = prompt("Print Number From - To");
// let max;
// let min;
// console.log(theValues.split("-")[0]);
// console.log(theValues.split("-")[1]);

// if (theValues.split("-")[0] < theValues.split("-")[1]) {
//   max = theValues.split("-")[1];
//   min = theValues.split("-")[0];
// } else {
//   max = theValues.split("-")[0];
//   min = theValues.split("-")[1];
// }
// for (let i = min; i <= max; i++) {
//   console.log(i);
// }
//==========================================================
// let NewDiv = document.createElement("div");
// let span = document.createElement("span");
// let h2 = document.createElement("h2");
// let p = document.createElement("p");

// let textH3 = document.createTextNode("Welcome");
// let textP = document.createTextNode("Welcome To Elzero Web School");
// let textSpan = document.createTextNode("X");
// console.log(NewDiv);

// NewDiv.appendChild(h2);
// NewDiv.appendChild(span);
// h2.appendChild(textH3);
// NewDiv.appendChild(p);
// p.appendChild(textP);
// span.appendChild(textSpan);

// setTimeout(function () {
//   document.body.appendChild(NewDiv);
// }, 5000);

// NewDiv.style.cssText =
//   "text-align: center; position: relative; background-color: #DDD; margin: 24px auto; width: 600px; padding: 9px;";
// span.style.cssText =
//   "position: absolute; top: 0px; right: 0; background-color: red; border-radius: 60%;width: 23px; color: white; padding: 4px;";

// span.onclick = function () {
//   span.onclick = NewDiv.remove();
// };

//==========================================================
// let DivCunt = document.createElement("div");
// let DivText = document.createTextNode("10");

// document.body.appendChild(DivCunt);
// DivCunt.appendChild(DivText);

// let counter = setInterval(countdown, 1000);

// function countdown() {
//   DivCunt.innerHTML -= 1;
//   if (DivCunt.innerHTML === "0") {
//     clearInterval(counter);
//   }
// }
//==========================================================
// let DivCunt2 = document.createElement("div");
// let DivText2 = document.createTextNode("10");

// document.body.appendChild(DivCunt2);
// DivCunt2.appendChild(DivText2);

// let counter = setInterval(countdown, 1000);

// function countdown() {
//   DivCunt2.innerHTML -= 1;
//   if (DivCunt2.innerHTML === "0") {
//     window.open(
//       "https://elzero.org/study/javascript-bootcamp-2021-study-plan/"
//     );
//     clearInterval(counter);
//   }
// }
//==========================================================
// let DivCunt3 = document.createElement("div");
// let DivText3 = document.createTextNode("10");

// document.body.appendChild(DivCunt3);
// DivCunt3.appendChild(DivText3);

// let counter = setInterval(countdown, 1000);

// function countdown() {
//   DivCunt3.innerHTML -= 1;
//   if (DivCunt3.innerHTML === "5") {
//     window.open(
//       "https://elzero.org/study/javascript-bootcamp-2021-study-plan/","_black","widht=200, height=200, left=50");
//     clearInterval(counter);
//   }
// }
//==========================================================
// let test = window.open(
//   "https://www.google.com/f",
//   "_black",
//   "widht=200, height=200, left=50"
// );

//==========================================================
// let btu = document.querySelector("button");

// btu.style.cssText =
//   "position: absolute; right: 44px;bottom: 20px;background-color: darkgray;border: none;border-radius: 4px;width: 32px;";

// document.body.style.cssText =
// "width: 5000px; height: 5000px;";
