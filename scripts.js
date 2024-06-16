// Smooth Scrolling for Navigation Links
const registerForm = document.getElementById("registrationForm");

const navLinks = document.querySelectorAll(".nav-link");
const registerButton = registerForm.querySelector("button[type='submit']"); // Select the button
const hamburger = document.getElementById("hamburger");
const xmark = document.getElementById("xmark");
const mainNav = document.getElementById("mobile-menu");

// Add an event listener to the mobile menu to close it on link click
const mobileMenuLinks = mainNav.querySelectorAll("a");
mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.add("hidden");
    xmark.classList.add("hidden");
    hamburger.classList.remove("hidden");
  });
});

navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  });
});

hamburger.addEventListener("click", (event) => {
  event.preventDefault();

  hamburger.classList.add("hidden");
  xmark.classList.remove("hidden");
  mainNav.style.transform = "translateX(0)";
  mainNav.classList.remove("hidden");
  mobileMenu.classList.add("menu-slide-enter-active");
  mobileMenu.classList.add("menu-slide-enter-from");
  mobileMenu.classList.add("menu-slide-enter-to");
});
xmark.addEventListener("click", (event) => {
  event.preventDefault();

  xmark.classList.add("hidden");
  hamburger.classList.remove("hidden");
  mainNav.style.transform = "translateX(120%)";
  mainNav.classList.add("hidden");
});

// hamburger.addEventListener("click", () => {
//   mobileMenu.classList.toggle("hidden");
// });
// hamburger.addEventListener("click", () => {
//   mobileMenu.classList.toggle("hidden");
//   mobileMenu.classList.toggle("menu-slide-enter-active");
//   mobileMenu.classList.toggle("menu-slide-enter-from");
//   mobileMenu.classList.toggle("menu-slide-enter-to");
// });

// mobileMenu.addEventListener("transitionend", () => {
//   if (mobileMenu.classList.contains("hidden")) {
//     mobileMenu.classList.remove("menu-slide-leave-active");
//     mobileMenu.classList.remove("menu-slide-leave-from");
//     mobileMenu.classList.remove("menu-slide-leave-to");
//   }
// });

// hamburger.addEventListener("click", (event) => {
//   event.preventDefault();

//   if (hamburger.classList.contains("fa-xmark")) {
//     hamburger.classList.remove("fa-xmark");
//     mainNav.style.transform = "translateX(120%)";
//     hamburger.classList.add("fa-bars");
//   }
// });

// Add an event listener to the mobile menu to close it
// mainNav.addEventListener("click", function (event) {
//   if (event.target === mainNav) {
//     // Only close if clicked outside of the links
//     mainNav.style.transform = "translateX(100%)";
//     hamburger.classList.remove("fa-xmark");
//     hamburger.classList.add("fa-bars");
//   }
// });
registerForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;
  registerButton.disabled = true; // Disable the button
  registerButton.innerHTML =
    '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...'; // Add a spinner
  emailjs
    .send("service_0n0xjp9", "template_lt8te4u", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      message: message,
      event: "Osten's Eco-Friendly Cooking Event",
    })
    .then(
      function (response) {
        // Disable the button and add a loading indicator

        console.log("SUCCESS!", response.status, response.text);
        alert("Registration successful! We've sent you a confirmation email.");
        registerButton.disabled = false;
        registerButton.innerHTML = "Register Now!";
        // Display a success message to the user
        alert(
          "Registration successful! We've sent a confirmation email to " +
            email +
            "."
        );
        registerForm.reset();
      },
      function (error) {
        console.log("FAILED...", error);
        // Re-enable the button and restore the text
        registerButton.disabled = false;
        registerButton.innerHTML = "Register Now!";
        // Display an error message to the user
        alert("Oops! Something went wrong. Please try again.");
      }
    );
});
const typingEffect = document.getElementById("typing-effect");
const text = typingEffect.textContent; // Get the text content
let i = 0; // Initialize index for typing

function typeWriter() {
  if (i < text.length) {
    typingEffect.textContent = text.substring(0, i + 1); // Display text character by character
    i++; // Increment index
    setTimeout(typeWriter, 100); // Delay for the typing effect
  }
}

typeWriter(); // Start the typing effect when the page loads
