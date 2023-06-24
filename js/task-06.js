const inputText = document.querySelector("#validation-input");
const textMinLength = inputText.getAttribute("data-length");

inputText.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length < textMinLength) {
    if (inputText.classList.contains("valid")) {
      inputText.classList.remove("valid");
    }
    inputText.classList.add("invalid");
  } else {
    if (inputText.classList.contains("invalid")) {
      inputText.classList.remove("invalid");
    }
    inputText.classList.add("valid");
  }
});
