let header = document.createElement("div");
let body = document.createElement("div");
let fouter = document.createElement("div");

let bar = document.createElement("ul");
let barli1 = document.createElement("li");
let barli2 = document.createElement("li");
let barli3 = document.createElement("li");
let barli4 = document.createElement("li");
let Elzero = document.createElement("div");

// DivsInBody
const DivsInBody = [];
const DivsInBodyNumbers = [];
const DivsInBodyNumbersPrint = [];
const DivsInBodyText = [];

for (let i = 0; i < 15; i++) {
  DivsInBody[i] = document.createElement("div");
  DivsInBodyNumbers[i] = document.createElement("div");
  DivsInBody[i].className = "body_Divs";

  DivsInBodyText[i] = document.createTextNode(`prodact`);
  DivsInBodyNumbersPrint[i] = document.createTextNode(`${i + 1}`);
  body.appendChild(DivsInBody[i]);
  DivsInBody[i].appendChild(DivsInBodyNumbers[i]);
  DivsInBodyNumbers[i].appendChild(DivsInBodyNumbersPrint[i]);
  DivsInBody[i].appendChild(DivsInBodyText[i]);
}

//header text
let ElzeroText = document.createTextNode("Elzero");
let home = document.createTextNode("Home");
let abuet = document.createTextNode("abuet");
let service = document.createTextNode("service");
let contact = document.createTextNode("contact");

// body text

// fouter text
let fouterText = document.createTextNode("Copyright 2023");

// classes
header.className = "header";
Elzero.className = "Elzero";
fouter.className = "fouter";

//head
header.appendChild(Elzero);
header.appendChild(bar);

bar.appendChild(barli1);
bar.appendChild(barli2);
bar.appendChild(barli3);
bar.appendChild(barli4);

barli1.appendChild(home);
barli2.appendChild(abuet);
barli3.appendChild(service);
barli4.appendChild(contact);

Elzero.appendChild(ElzeroText);

//body

//fouter
fouter.appendChild(fouterText);

document.body.appendChild(header);
document.body.appendChild(body);
document.body.appendChild(fouter);

//Styles in css header

header.style.cssText =
  "display: flex; justify-content: space-between; margin: 5px 20px;";
Elzero.style.cssText =
  "  color: green; font-weight: bold;  font-size: 30px; width: 100px; ";
bar.style.cssText =
  "display: flex; gap: 20px; justify-content: flex-end; list-style: none;";

//Styles in css bodymain
body.style.cssText =
  "height: 500px; background-color: #ddd; display: flex; flex-wrap: wrap;gap: 30px;justify-content: space-evenly; padding-top: 10px; padding-bottom: 10px;";

//Styles in css DivsInBody

let CssBodyDvis = document.querySelectorAll(".body_Divs");

CssBodyDvis.forEach((e) => {
  e.style.cssText =
    "background-color: #fff; width: 250px;text-align: center; padding-top: 19px; color: darkseagreen; ";
});

//Styles in css fouter

fouter.style.cssText =
  "background: green; color: white;height: 49px; display: flex;justify-content: center;align-items: center; font-family: system-ui;";
