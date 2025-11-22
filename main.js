const form = document.getElementById("newsletter-email-form");
const emailInput = document.getElementById("email");
const newsletterConfirmation = document.querySelector(".newsletter-confirmation");
const dismissMessage = document.getElementById("dismiss-button");
const errorMessage = document.getElementById("email-error");
const newsletterCard = document.querySelector(".newsletter-card");
const emailInputConfirmation = document.getElementById("email-input-confirmation");
const egg = document.querySelector(".egg");

// MANUAL FORM VALIDATION

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

// UI UPDATES

function showError() {
    emailInput.classList.add("error");
    errorMessage.textContent = "Valid email required";
}

function hideError() {
    emailInput.classList.remove("error");
    errorMessage.textContent = "";
}

// HANDLE INPUT VALIDATION

function handleInput() {
    const email = emailInput.value;

    if (validateEmail(email)) {
        hideError();
    } else {
        showError();
    }
}

// HANDLE FORM SUBMIT

function handleSubmit(e) {
  e.preventDefault();

  const email = emailInput.value;

  if (!validateEmail(email)) {
    showError();
    return;
  }

  hideError();

  newsletterCard.classList.toggle("hidden");
  newsletterConfirmation.classList.toggle("hidden");
  emailInputConfirmation.textContent = email;
}

// EVENT LISTENERS

emailInput.addEventListener("input", handleInput);
form.addEventListener("submit", handleSubmit);

// DISMISS BUTTON FUNCTION

dismissMessage.addEventListener("click", () => {
  newsletterConfirmation.classList.toggle("hidden");
  egg.classList.toggle("hidden");
});