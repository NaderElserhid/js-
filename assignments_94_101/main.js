let div = document.querySelector("div");
let span = document.querySelector("span");
let p = document.querySelector("p");
let article = document.querySelector("article");
let section = document.querySelector("section");

div.onclick = function () {
  sayTheType("div");
};
span.onclick = function () {
  sayTheType("span");
};
p.onclick = function () {
  sayTheType("p");
};
article.onclick = function () {
  sayTheType("article");
};
section.onclick = function () {
  sayTheType("section");
};

function sayTheType(type) {
  console.log(`this is ${type}`);
}
let Span = document.querySelectorAll("span");
console.log(Span[1].nextSibling);
