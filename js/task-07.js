const text = document.querySelector("#text");
const range = document.querySelector("#font-size-control");
range.addEventListener("change", sizeChange);

function sizeChange() {
  text.style.fontSize = `${range.value}px`;
}
