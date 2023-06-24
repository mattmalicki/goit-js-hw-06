const inputText = document.querySelector("#validation-input");
const textMinLength = inputText.getAttribute("data-length");

inputText.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === 0) {
    inputText.classList.remove("valid");
    inputText.classList.remove("invalid");
  } else if (event.currentTarget.value.length < textMinLength) {
    inputText.classList.remove("valid");
    inputText.classList.add("invalid");
  } else {
    inputText.classList.remove("invalid");
    inputText.classList.add("valid");
  }
});
