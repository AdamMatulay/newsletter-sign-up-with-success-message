const form = document.getElementById('newsletter-email-form');
const emailInput = document.getElementById('email');
const newsletterConfirmation = document.querySelector('.newsletter-confirmation');
const dismissMessage = document.getElementById('dismiss-button');


// MANUAL FORM VALIDATION

function validateData(data) {
    const errorMessage = document.getElementById('email-error');
    
    if(!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        emailInput.classList.add('error');
        errorMessage.textContent = 'Valid email required';
        return(false);
    } else {
        emailInput.classList.remove('error');
        errorMessage.textContent = '';
        return(true);
    }
}

// LIVE INPUT VALIDATION

emailInput.addEventListener('input', () => {
    const data = { email: emailInput.value };
    validateData(data);
});

// FORM SUBMIT FUNCTION

function handleSubmit(e) {
    e.preventDefault();
    
    const data = { email: emailInput.value };

    let result = validateData(data);

    const newsletterCard = document.querySelector('.newsletter-card');
    const emailInputConfirmation = document.getElementById('email-input-confirmation');

    if (result === true) {
        newsletterCard.classList.toggle('hidden');
        newsletterConfirmation.classList.toggle('hidden');
        emailInputConfirmation.textContent = emailInput.value;
    } 
}

form.addEventListener('submit', handleSubmit);

// DISMISS BUTTON FUNCTION

const egg = document.querySelector('.egg');

dismissMessage.addEventListener('click', () => {
    newsletterConfirmation.classList.toggle('hidden');
    egg.classList.toggle('hidden');
});