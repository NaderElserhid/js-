// mainData Variable Content
import info from "./articles.json" assert { type: "json" };

let mainData = JSON.stringify(info);
console.log(`befor json ${mainData} `);

let mainDataobj = JSON.parse(mainData);

console.log(mainDataobj);

for (let i = 0; i < mainDataobj.length; i++) {
  mainDataobj[i].name = " nb";
}

// UpdatedData Variable Content
let updatedData = JSON.stringify(mainDataobj);

console.log(updatedData);

//====================================================
console.log(info);

const div = [];
const p = [];
const text = [];

for (let i = 0; i < info.length; i++) {
  div[i] = document.createElement("div");
  p[i] = document.createElement("p");
  text[i] = document.createTextNode(
    `${info[i]["name"]} , id =  ${info[i]["id"]} , nameOfTheSc =  ${info[i]["nameOfTheSc"]}, age =  ${info[i]["age"]}`
  );
  p[i].appendChild(text[i]);
  div[i].appendChild(p[i]);

  document.body.appendChild(div[i]);
}
