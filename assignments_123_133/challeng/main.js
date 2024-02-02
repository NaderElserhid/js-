let form = document.querySelector(".form");
let addbtum = document.querySelector(".add");
let inputfield = document.querySelector(".input");
let tasks = document.querySelector(".tasks");

form.style.cssText =
  " align-items: center; width: 603px;margin: 68px auto;display: flex;justify-content: center;height: 60px;background-color: #ddd;border-radius: 18px;gap: 20px;";

addbtum.style.cssText =
  "  background: red; color: white; border: none;border-radius: 4px;height: 25px;width: 80px; cursor: pointer;";

inputfield.style.cssText =
  "border: none;width: 300px; height: 22px;border-radius: 9px;";

if (localStorage.div) {
  console.log(localStorage.div);
   localStorage.getItem("div",)
} else {
  console.log("no");
}

addbtum.addEventListener("click", creatTask);

const globalTasks = [];

function creatTask() {
  const text = inputfield.value;
  const submited = false;

  globalTasks.push({
    id: Date.now(),
    text,
    submited,
  });



  const stringify = JSON.stringify(globalTasks);
  console.log(stringify);
  console.log(JSON.parse(stringify));

  localStorage.setItem("div",stringify);

  let NewDiv = tasks.appendChild(document.createElement("div"));
  NewDiv.innerHTML = text;

  //to add delet buttom to div
  let delet = NewDiv.appendChild(document.createElement("input"));
  delet.setAttribute("type", "submit");
  // add to localStorge

  // add Styles in css
  NewDiv.style.cssText =
    " margin: 6px auto; background: white; width: 400px; display: flex;  justify-content: space-between;height: 25px;border-radius: 13px;padding: 5px;";
  tasks.style.cssText =
    " flex-direction: column; width: 500px;margin: 20px auto;background-color: #ddd;padding: 20px;border-radius: 5px;display: flex;justify-content: center;";
  delet.onclick = () => {
    NewDiv.remove();
   // localStorage.removeItem("div",stringify)
  };
}

globalTasks.forEach((e) => {
  //to add the div
  let NewDiv = tasks.appendChild(document.createElement("div"));
  NewDiv.appendChild(document.createTextNode(inputfield.value));
  NewDiv.innerHTML = e.text;

  //to add delet buttom to div
  let delet = NewDiv.appendChild(document.createElement("input"));
  delet.setAttribute("type", "submit");

  // remav to localStorge

  // add Styles in css
  NewDiv.style.cssText =
    " margin: 6px auto; background: white; width: 400px; display: flex;  justify-content: space-between;height: 25px;border-radius: 13px;padding: 5px;";
  tasks.style.cssText =
    " flex-direction: column; width: 500px;margin: 20px auto;background-color: #ddd;padding: 20px;border-radius: 5px;display: flex;justify-content: center;";
});
