function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
button.addEventListener("click", changeBackground);

function changeBackground() {
  const random = getRandomHexColor();
  document.querySelector("body").style.backgroundColor = random;
  document.querySelector("span.color").textContent = random;
}
