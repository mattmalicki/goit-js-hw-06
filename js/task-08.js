const login = document.querySelector(".login-form");

function checkLogin(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  const user = {
    email: email.value,
    password: password.value,
  };

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  console.log(user);
  event.currentTarget.reset();
}

login.addEventListener("submit", checkLogin);
