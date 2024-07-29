function animatedForms() {
  const arrows = document.querySelectorAll(".fa-arrow-down");

  arrows.forEach((arrow) => {
    arrow.addEventListener("click", () => {
      const input = arrow.previousElementSibling;
      const parent = arrow.parentElement;
      const nextForm = parent.nextElementSibling;

      //check for validation
      if (input.type === "text" && validateUser(input)) {
        nextSlider(parent, nextForm);
      } else if (input.type === "email" && validateEmail(input)) {
        nextSlider(parent, nextForm);
      } else if (input.type === "password" && validatePassword(input)) {
        nextSlider(parent, nextForm);
      } else {
        parent.style.animation = "shake 0.5s ease";
      }

      //get rid of aniamtion
      parent.addEventListener("animationend", () => {
        parent.style.animation = "";
      });
    });
  });
}

function validateUser(user) {
  if (user.value.length < 6) {
    console.log("Username must be at least 6 characters long");
    error("#d9280d");
  } else {
    error("#26deb3");
    return true;
  }
}

function validateEmail(email) {
  const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (validation.test(email.value)) {
    error("#26deb3");
    return true;
  } else {
    error("#d9280d");
  }
}
function validatePassword() {
  const password = document.getElementById("password");
  if (password.value.length < 8 || !password.value.match(/[a-z]/)) {
    console.log(
      "Password must be at least 8 characters long and contain at least one lowercase letter"
    );
    error("#d9280d");
  } else {
    error("#26deb3");
    return true;
  }
}

function nextSlider(parent, nextForm) {
  parent.classList.add("inactive");
  parent.classList.remove("active");
  nextForm.classList.add("active");
}
function error(color) {
  document.body.style.backgroundColor = color;
}

animatedForms();
