// Select Element and change content
let items = document.querySelector("ul");
let shopItems = document.querySelectorAll("li");
shopItems.forEach((item) => {
  item.innerText += "expensive";
});
let newItems = ["book", "car", "cookies", "food", "water"];
newItems.forEach((newItem) => {
  items.innerHTML += `<li style="color: green">${newItem}</li>`;
});
const title = document.querySelector("#title");
title.innerHTML = '<h2 style="color: blue">Shopping List</h2>';

// Change the Attribute value
let link = document.querySelector("a");
link.setAttribute(
  "href",
  "https://www.youtube.com/watch?v=wKBu_dEaF9E&list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc&index=6"
);
link.innerText = "JavaScript Tutorial";

let para = document.querySelector("p");
para.setAttribute("class", "blue");
para.style.fontSize = "100px";
para.style.margin = "";

// add and remove class
let section = document.querySelector("section");
section.classList.add("biggertext");
section.classList.remove("red");

// search for the content and add class if the requirement fit
let h6s = document.querySelectorAll("h6");
h6s.forEach((h6) => {
  if (h6.textContent.includes("red")) {
    h6.classList.add("red");
    h6.style.margin = "10px";
  } else if (h6.textContent.includes("green")) {
    h6.classList.add("green");
    h6.style.margin = "10px";
  }
});

// toggle the class
// title.classList.toggle("green");
// add the class "green" to item
// title.classList.toggle("green");
// remove the class "green" from item
