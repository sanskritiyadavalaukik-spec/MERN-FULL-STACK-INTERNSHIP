const loginView = document.getElementById("view-login");
const registrationView = document.getElementById("view-registration");

const showRegister = document.getElementById("show-register");
const showLogin = document.getElementById("show-login");

showRegister.addEventListener("click", function(event) {
   event.preventDefault();

   loginView.classList.add("hidden");
   registrationView.classList.remove("hidden");
});

showLogin.addEventListener("click",function(event) {
    event.preventDefault();

    registrationView.classList.add("hidden");
    loginView.classList.remove("hidden");
});

