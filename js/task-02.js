const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const arrayLi = [];
const list = document.querySelector("#ingredients");

ingredients.forEach((element) => {
  const itemLi = document.createElement("li");
  itemLi.textContent = element;
  itemLi.class = "item";
  itemLi.setAttribute("class", "item");
  arrayLi.push(itemLi);
});

list.append(...arrayLi);
