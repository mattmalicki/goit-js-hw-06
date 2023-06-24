function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const divBox = document.querySelector("#boxes");

createBtn.addEventListener("click", (event) => {
  createBoxes(document.querySelector("input[type='number']").value);
});

destroyBtn.addEventListener("click", (event) => {
  destroyBoxes();
});

function createBoxes(amount) {
  let boxSize = 30;
  for (let i = 0; i < amount; i++) {
    const divString = `<div style='background-color="${getRandomHexColor()}" display="block" width="${boxSize}px" height="${boxSize}px"'></div>`;
    boxSize += 10;
    divBox.insertAdjacentHTML("beforeend", `${divString}`);
  }
}

function destroyBoxes() {
  divBox.textContent = "";
  // while (divBox.firstChild) {
  //   myNode.removeChild(divBox.lastChild);
  // }
}
