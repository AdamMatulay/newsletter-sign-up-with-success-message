const form = document.getElementById('newsletter-email-form');

// MANUAL FORM VALIDATION

function validateData(data) {
    if(!data.email.trim()) {
        showError();
    } else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
       showError(); 
    }
}

// ERROR MESSAGE

function showError() {
    const errorInput = document.getElementById('email');
    const errorMessage = document.getElementById('email-error');

    errorInput.classList.add('error');
    errorMessage.textContent = 'Valid email required';
}

// FORM SUBMIT FUNCTION

function handleSubmit(e) {
    e.preventDefault();
    
    const data = Object.fromEntries(new FormData(e.target));
    
    validateData(data);
}

form.addEventListener('submit', handleSubmit);