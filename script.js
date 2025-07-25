document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for contacting R.E.C! We will get back to you soon.');
      form.reset();
    });
  }
}); 