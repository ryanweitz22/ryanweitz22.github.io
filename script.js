// Add interactivity here, e.g., smooth scrolling, image sliders, etc.
// You can also handle form submissions and other dynamic content loading.

// Example of smooth scrolling with JavaScript:
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function submitForm(event) {
  event.preventDefault();

  fetch('Server.php', {
      method: 'POST',
      body: new FormData(document.getElementById('contact-form'))
    })
    .then(function (response) {
      if (response.ok) {
        document.getElementById('response-message').textContent = 'Message sent successfully!';
        document.getElementById('response-message').style.display = 'block';
        document.getElementById('contact-form').reset();
      } else {
        throw new Error('Error submitting the form. Please check the details you have provided.');
      }
    })
    .catch(function (error) {
      console.error(error);
    });
}

document.getElementById('contact-form').addEventListener('submit', submitForm);