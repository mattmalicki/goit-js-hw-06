const text = document.querySelector("#text");
const range = document.querySelector("#font-size-control");
// Those commented lines will match range value to the font size:
// ---when page is loading the range is set in the middle ao this will match font size to the begining value
// text.style.fontSize = `${range.value}px`;
// ---this will set begining value to match font size witch is 16
// range.setAttribute("value", "16");

range.addEventListener("input", sizeChange);

function sizeChange() {
  text.style.fontSize = `${range.value}px`;
}
