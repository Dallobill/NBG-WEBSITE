document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    const name = form.querySelector("[name='name']").value.trim();
    const email = form.querySelector("[name='email']").value.trim();
    const message = form.querySelector("[name='message']").value.trim();
    let errors = [];

    // Validate fields
    if (!name) errors.push("Name is required.");
    if (!email) {
      errors.push("Email is required.");
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      errors.push("Enter a valid email address.");
    }
    if (!message) errors.push("Message is required.");

    // If errors found
    if (errors.length > 0) {
      event.preventDefault();
      alert(errors.join("\n")); // Or replace with inline error display
    }
  });
});

  