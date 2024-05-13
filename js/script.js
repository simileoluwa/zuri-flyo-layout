const submit = document.getElementById("submit");

submit.addEventListener("click", validate);

function validate(e) {
  e.preventDefault();

  const emailField = document.getElementById("email");
  let valid = true;

  if (!emailField.value) {
    const nameError = document.getElementById("nameError");
    nameError.classList.add("visible");
    emailField.classList.add("invalid");
    nameError.setAttribute("aria-hidden", false);
    nameError.setAttribute("aria-invalid", true);
  }

  return valid;
}

const submit1 = document.getElementById("submit1");

submit1.addEventListener("click", validate1);

function validate1(e) {
  e.preventDefault();

  const emailField1 = document.getElementById("email1");
  let valid = true;

  if (!emailField1.value) {
    const nameError1 = document.getElementById("nameError1");
    nameError1.classList.add("visible");
    emailField1.classList.add("invalid");
    nameError1.setAttribute("aria-hidden", false);
    nameError1.setAttribute("aria-invalid", true);
  }

  return valid;
}
