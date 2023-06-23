let counterValue = 0;
const value = document.querySelector("#value");

const decrement = () => {
  counterValue--;
  value.textContent = `${counterValue}`;
};

const increment = () => {
  counterValue++;
  value.textContent = `${counterValue}`;
};

const decButton = document.querySelector('button[data-action="decrement"]');
decButton.addEventListener("click", decrement);
const incButton = document.querySelector('button[data-action="increment"]');
incButton.addEventListener("click", increment);
