// Day 3: switch between login and registration without reloading the page.

const loginView = document.getElementById("view-login");
const registrationView = document.getElementById("view-registration");
const showRegister = document.getElementById("show-register");
const showLogin = document.getElementById("show-login");

if (loginView && registrationView && showRegister && showLogin) {
  showRegister.addEventListener("click", function (event) {
    event.preventDefault();
    loginView.classList.add("hidden");
    registrationView.classList.remove("hidden");
  });


  showLogin.addEventListener("click", function (event) {
    event.preventDefault();
    registrationView.classList.add("hidden");
    loginView.classList.remove("hidden");
  });
}



const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function showError(input, errorId, message) {
  const errorElement = document.getElementById(errorId);
  if (errorElement) errorElement.textContent = message;
  input.setAttribute("aria-invalid", "true");
}


function clearError(input, errorId) {
  const errorElement = document.getElementById(errorId);
  if (errorElement) errorElement.textContent = "";
  input.setAttribute("aria-invalid", "false");
}



const loginForm = document.querySelector('[data-form="login"]');
if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = loginForm.querySelector('[name="email"]');
    const password = loginForm.querySelector('[name="password"]');
    const success = loginForm.querySelector(".success");
    let isValid = true;

    clearError(email, "login-email-error");
    clearError(password, "login-password-error");
    if (success) success.hidden = true;

    if (!emailPattern.test(email.value.trim())) {
      showError(email, "login-email-error", "Please enter a valid email address.");
      isValid = false;
    }

    if (password.value.length < 6) {
      showError(password, "login-password-error", "Password must be at least 6 characters long.");
      isValid = false;
    }

    if (isValid && success) {
      success.textContent = "Your fields look good. Account sign-in needs a connected backend.";
      success.hidden = false;
    }
  });
}


 
document.querySelectorAll('[data-form="registration"]').forEach(function (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = form.querySelector('[name="email"]');
    const password = form.querySelector('[name="password"]');
    const confirmPassword = form.querySelector('[name="confirm-password"]');
    const success = form.querySelector(".success");
    let isValid = true;

    clearError(email, "reg-email-error");
    clearError(password, "reg-password-error");
    clearError(confirmPassword, "confirm-password-error");
    if (success) success.hidden = true;

    if (!emailPattern.test(email.value.trim())) {
      showError(email, "reg-email-error", "Please enter a valid email address.");
      isValid = false;
    }

    if (password.value.length < 6) {
      showError(password, "reg-password-error", "Password must be at least 6 characters long.");
      isValid = false;
    }

    if (confirmPassword.value !== password.value || confirmPassword.value.length === 0) {
      showError(confirmPassword, "confirm-password-error", "Passwords do not match.");
      isValid = false;
    }

    if (isValid && success) {
      success.textContent = "Your fields look good. Creating an account needs a connected backend.";
      success.hidden = false;
    }

  });
});
 


document.querySelectorAll(".form-input").forEach(function (input) {
  input.addEventListener("input", function () {
    const errorId = input.getAttribute("aria-describedby");
    if (errorId) clearError(input, errorId);
    const form = input.closest("form");
    const success = form ? form.querySelector(".success") : null;
    if (success) success.hidden = true;
  });
});