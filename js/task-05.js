const inputText = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

inputText.addEventListener("input", (event) => {
  if (event.currentTarget.value === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = event.currentTarget.value;
  }
});
