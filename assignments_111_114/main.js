// let lis = document.querySelectorAll("ul li");
// let main = document.querySelector(".main");
// console.log(main);

// if (window.localStorage.color) {
//   main.style.backgroundColor = window.localStorage.color;
//   lis.forEach((li) => {
//     li.classList.remove("active");
//   });
//   document
//     .querySelector(`[data-color="${window.localStorage.color}"]`)
//     .classList.add("active");
// } else {
//   console.log("no");
// }

// console.log(lis);

// lis.forEach((li) => {
//   li.addEventListener("click", (e) => {
//     console.log(e.currentTarget.dataset.color);
//     lis.forEach((li) => {
//       li.classList.remove("active");
//     });
//     e.currentTarget.classList.add("active");
//     window.localStorage.setItem("color", e.currentTarget.dataset.color);
//     main.style.backgroundColor = e.currentTarget.dataset.color;
//   });
// });