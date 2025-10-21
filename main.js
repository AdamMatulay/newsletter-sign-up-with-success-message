const submitButton = document.getElementById('submit-button');
const newsletterCard = document.querySelector('.newsletter-card');
const newsletterMessage = document.querySelector('.newsletter-confirmation');
const dismissButton = document.getElementById('dismiss-button');

function subscripeToNewsletter() {
    newsletterCard.classList.toggle('hidden');
    newsletterMessage.classList.toggle('hidden');
}

submitButton.addEventListener('click', subscripeToNewsletter);