// let WayOne = document.getElementById("#elzero");
// console.log(WayOne);

// let WayTwo = document.getElementsByClassName("element");
// console.log(WayTwo);

// let WayThree = document.getElementsByName("js");
// console.log(WayThree);

// let WayFuor= document.getElementsByName("js");
// console.log(WayFuor);

// let Wayfive= document.getElementsByTagName("div");
// console.log(Wayfive);

// let WaySix = document.querySelectorAll("js");
// console.log(WaySix);

// let Wayseven = document.querySelectorAll("div");
// console.log(Wayseven);

// let WayEight = document.querySelectorAll("#elzero");
// console.log(WayEight);

// let WayNine = document.querySelectorAll(".element");
// console.log(WayNine);

// let Wayten = document.querySelector("div");
// console.log(Wayten);

//  let WayEleven = document.body;
//  console.log(WayEleven);
//===============================================================

// let MyNewAtri = document.querySelectorAll("img");

// for(let i= 0 ; i < 10; i++){
//     MyNewAtri[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
//     MyNewAtri[i].alt = "Elzero school";
// }

// MyNewAtri.forEach(image=>{
//     image.src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
//     image.alt = "Elzero school"
// });

//===============================================================
// let NewDiv = [];
// let NewParagragh = [];
// let NewHthree = [];

// for (let i = 0; i < 100; i++) {
//   let myh3 = document.createTextNode("here is the titile");
//   let myp = document.createTextNode("here is the paragragh");
//   NewDiv[i] = document.createElement("div");
//   NewHthree[i] = document.createElement("h3");
//   NewParagragh[i] = document.createElement("p");
//   NewDiv[i].className = "prodact";
//   NewDiv[i].appendChild(NewHthree[i]);
//   NewDiv[i].appendChild(NewParagragh[i]);
//   NewHthree[i].appendChild(myh3);
//   NewParagragh[i].appendChild(myp);
//   console.log(NewDiv[i]);
//   document.body.appendChild(NewDiv[i]);
// }

// let NewDiv = [];
// let NewParagragh = [];
// let NewHthree = [];

// let myh3 = document.createTextNode("here is the titile");
// let myp = document.createTextNode("here is the paragragh");

// for (let i = 0; i < 100; i++) {
//   const divItem = document.createElement("div");
//   const h3Item = document.createElement("h3");
//   const paraItem = document.createElement("p");
//   divItem.className = "prodact";
//   divItem.appendChild(h3Item);
//   divItem.appendChild(paraItem);
//   h3Item.textContent = "here is the titile";
//   paraItem.textContent = "here is the paragragh";
//   document.body.appendChild(divItem);
// }
//===============================================================

// let input = document.querySelector("[name='dollar']");
// const doler = 15.6;
// let result = document.getElementsByClassName("result");
// console.log(result);

// document.forms[0].onsubmit = function (e) {
//   e.preventDefault();

//   document.getElementById("result").innerText = `{ ${
//     input.value
//   } } USD Dollar = {${(input.value * doler).toFixed(2)} } Egyptian Pound`;
// };
// document.getElementById("man").innerHTML = "hello from the inner html";
//===============================================================

// let MyclassOne = document.querySelector('[title = "two"]');
// let MyclassTwo = document.querySelector('[title = "one"]');

// if (MyclassOne.classList.contains("one")) {
//   MyclassOne.classList.remove("one");
//   MyclassOne.classList.add("two");
//   console.log(MyclassOne.classList);
//   console.log(MyclassOne);
//   document.querySelector('[title = "one"]').innerHTML = "Two2";
// }
// if (MyclassTwo.classList.contains("two")) {
//   MyclassTwo.classList.remove("two");
//   MyclassTwo.classList.add("one");
//   console.log(MyclassTwo.classList);
//   console.log(MyclassTwo);
// }
//===============================================================

// let MyDecodingOne = document.querySelectorAll('[decoding="async"]');
// console.log(MyDecodingOne[2]);

// const images = document.querySelectorAll("img");

// for (let i = 0; i < 5; i++) {
//   if (MyDecodingOne[i].alt === "") {
//     console.log((MyDecodingOne[i].alt = "Elzero New"));
//   } else {
//     console.log((MyDecodingOne[i].alt = "old"));
//   }
// }
//===============================================================

// let test = document.getElementById("test");

// test.style.color = "red";
// test.style.cssText = "font-weigْht: bold;";
//===============================================================
let ElmentNumber = document.forms[0].elements;
let ElmentText = document.forms[0].texts;
let ElmentType = document.forms[0].type;
const remov =  document.querySelector(".results");
console.log(remov);
document.forms[0].onsubmit = function (ele) {
  ele.preventDefault();
  console.log(ElmentNumber.value);
  console.log(ElmentText.value);
  console.log(ElmentType.value);

  

  for (let i = 0; i < ElmentNumber.value; i++) {
    if (ElmentType.value === "Div") {
      const div = window.document.createElement("div");
      div.id = `id-${i + 1}`;
      div.title = "element";
      div.className = "box";
      div.textContent = ElmentText.value;
      console.log(div);
      remov.appendChild(div);
    } else {
      const div = window.document.createElement("section");
      div.id = `id-${i + 1}`;
      div.title = "element";
      div.className = "box";
      div.textContent = ElmentText.value;
      console.log(div);
      remov.appendChild(div);
    }
  } 
  
};
