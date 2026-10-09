
const loginView = document.getElementById("view-login");
const registrationView = document.getElementById("view-registration");

const showRegister = document.getElementById("show-register");
const showLogin = document.getElementById("show-login");

// Day 3: View switching
// Run navigation code only when these elements exist.

if (loginView && registrationView && showRegister && showLogin) {
    showRegister.addEventListener("click", function(event) {
        event.preventDefault();

        loginView.classList.add("hidden");
        registrationView.classList.remove("hidden");
    });

    showLogin.addEventListener("click", function(event) {
        event.preventDefault();

        registrationView.classList.add("hidden");
        loginView.classList.remove("hidden");
    });
}

// Common email pattern
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Show an inline error
function showError(input, errorId, message) {
    const errorElement = document.getElementById(errorId);

    if (errorElement) {
        errorElement.textContent = message;
    }

    input.setAttribute("aria-invalid", "true");
}

// Clear an inline error
function clearError(input, errorId) {
    const errorElement = document.getElementById(errorId);

    if (errorElement) {
        errorElement.textContent = "";
    }

    input.setAttribute("aria-invalid", "false");
}

// Day 4: Login validation
const loginForm = document.querySelector('[data-form="login"]');

if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("login-email");
        const password = document.getElementById("login-password");

        let isValid = true;

        clearError(email, "login-email-error");
        clearError(password, "login-password-error");

        loginForm.querySelector(".success").hidden = true;

        if (!emailPattern.test(email.value.trim())) {
            showError(
                email,
                "login-email-error",
                "Please enter a valid email address."
            );
            isValid = false;
        }

        if (password.value.length < 6) {
            showError(
                password,
                "login-password-error",
                "Password must be at least 6 characters long."
            );
            isValid = false;
        }

        if (isValid) {
            const success = loginForm.querySelector(".success");
            success.textContent =
                "Validation passed. Login authentication is not implemented yet.";
            success.hidden = false;
        }
    });
}

// Day 4: Registration validation
// Works with both the Day 3 registration view and registration.html.

document.querySelectorAll('[data-form="registration"]').forEach(function(registrationForm) {
    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = registrationForm.querySelector('[name="email"]');
        const password = registrationForm.querySelector('[name="password"]');
        const confirmPassword = registrationForm.querySelector('[name="confirm-password"]');

        let isValid = true;

        clearError(email, "reg-email-error");
        clearError(password, "reg-password-error");
        clearError(confirmPassword, "confirm-password-error");

        const success = registrationForm.querySelector(".success");
        if (success) {
            success.hidden = true;
        }

        if (!emailPattern.test(email.value.trim())) {
            showError(
                email,
                "reg-email-error",
                "Please enter a valid email address."
            );
            isValid = false;
        }

        if (password.value.length < 6) {
            showError(
                password,
                "reg-password-error",
                "Password must be at least 6 characters long."
            );
            isValid = false;
        }

        if (confirmPassword.value !== password.value) {
            showError(
                confirmPassword,
                "confirm-password-error",
                "Passwords do not match."
            );
            isValid = false;
        }

        if (isValid && success) {
            success.textContent =
                "Validation passed. Registration is not connected to a backend yet.";
            success.hidden = false;
        }
    });
});

// Clear an error when the user edits the corresponding input.

document.querySelectorAll(".form-input").forEach(function(input) {
    input.addEventListener("input", function() {
        const errorId = input.getAttribute("aria-describedby");

        if (errorId) {
            clearError(input, errorId);
        }

        const form = input.closest("form");
        const success = form ? form.querySelector(".success") : null;

        if (success) {
            success.hidden = true;
        }
    });
});
