const login = document.querySelector(".login-form");

function checkLogin(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  console.log(`Email: ${email.value} password: ${password.value}`);
  event.currentTarget.reset();
}

login.addEventListener("submit", checkLogin);
