const categoriesAmount = document.querySelector("#categories").children;
console.log(`Number of categories: ${categoriesAmount.length}`);

const categoriesArray = document.querySelectorAll(".item");

categoriesArray.forEach((category, index) => {
  let categoryHeader = categoriesArray[index].firstElementChild.textContent;
  let categoryElementsAmount =
    categoriesArray[index].querySelector("ul").children.length;
  console.log(`Category: ${categoryHeader}`);
  console.log(`Number of elements: ${categoryElementsAmount}`);
});
