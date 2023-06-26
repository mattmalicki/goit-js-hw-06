const categoriesAmount = document.querySelector("#categories").children;
console.log(`Number of categories: ${categoriesAmount.length}`);

const categoriesArray = document.querySelectorAll(".item");

categoriesArray.forEach((category) => {
  let categoryHeader = category.querySelector("h2").textContent;
  let categoryElementsAmount = category.querySelectorAll("li").length;
  console.log(`Category: ${categoryHeader}`);
  console.log(`Number of elements: ${categoryElementsAmount}`);
});
