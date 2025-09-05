document.addEventListener("DOMContentLoaded", () => {
  // Get DOM elements
  const signupForm = document.querySelector(".subscription__form");
  const signupSection = document.querySelector(".subscription");
  const confirmationSection = document.querySelector(".subscription-success");
  const dismissButton = document.querySelector(".subscription-success__dismiss");
  const emailDisplay = confirmationSection.querySelector(".subscription-success__description strong");
  const errorMessage = signupForm.querySelector(".subscription__error");

  // Check if elements exist
  if (
    !signupForm ||
    !signupSection ||
    !confirmationSection ||
    !dismissButton ||
    !emailDisplay ||
    !errorMessage
  ) {
    console.error(
      "One or more DOM elements not found. Check your HTML classes."
    );
    return;
  }

  // Handle form submission
  signupForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent page reload
    const emailInput = document.querySelector("#email").value;
    const emailRegex = /^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/i;

    // Reset error state
    errorMessage.classList.remove("subscription__error--visible");

    // Validate email
    if (emailRegex.test(emailInput)) {
      signupSection.style.display = "none"; // Hide signup section
      confirmationSection.classList.remove("subscription-success--hidden"); // Show success section
      emailDisplay.textContent = emailInput; // Update email in success message
    } else {
      errorMessage.classList.add("subscription__error--visible"); // Show error message
    }
  });

  // Handle dismiss button click
  dismissButton.addEventListener("click", () => {
    confirmationSection.classList.add("subscription-success--hidden"); // Hide success section
    signupSection.style.display = ""; // Show signup section (reset to CSS default)
    signupForm.reset(); // Clear the form
    errorMessage.classList.remove("subscription__error--visible"); // Hide error message
  });
});
