// Initialize EmailJS
(function () {
  emailjs.init("manikandan.bme3112@gmail.com");
})();

function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var feedback = document.getElementById("feedback");

  if (name === "" || email === "" || message === "") {
    feedback.textContent = "All fields are required.";
    feedback.style.color = "red";
    feedback.classList.remove("hidden");
    return false;
  }

  var templateParams = {
    from_name: name,
    from_email: email,
    message: message,
  };

  emailjs.send("service_0yn4inud", "template_uieem0w", templateParams).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
      feedback.textContent = "Thank you for your message!";
      feedback.style.color = "green";
      feedback.classList.remove("hidden");

      // Clear the form fields
      document.getElementById("contactForm").reset();
    },
    function (error) {
      console.log("FAILED...", error);
      feedback.textContent = "Failed to send your message.";
      feedback.style.color = "red";
      feedback.classList.remove("hidden");
    }
  );

  return false; // Prevent actual form submission
}
