function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const divBox = document.querySelector("#boxes");
let boxSize = 30;

createBtn.addEventListener("click", () => {
  createBoxes(document.querySelector("input[type='number']").value);
});

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});

function createBoxes(amount) {
  const boxesIn = divBox.childElementCount;
  amount = amount >= boxesIn ? amount - boxesIn : 0;
  for (let i = 0; i < amount; i++) {
    const divString = `<div style="background-color: ${getRandomHexColor()}; width: ${boxSize}px; height: ${boxSize}px"></div>`;
    boxSize += 10;
    divBox.insertAdjacentHTML("beforeend", `${divString}`);
  }
}

function destroyBoxes() {
  divBox.textContent = "";
  document.querySelector('input[type="number"]').value = null;
  boxSize = 30;
}
