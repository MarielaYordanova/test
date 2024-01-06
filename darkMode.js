// Get the button, body, element to change content, and containers
const contactMeButton = document.getElementById('contactMeButton');
const body = document.body;
const introElement = document.querySelector('.intro');
const containersToChangeColor = document.querySelectorAll('.top-container, .middle-container, .bottom-container');

// Initial text content
let initialText = "I am still new here, but I am very consistent and creative so expect to see some great progress soon";

// Add click event listener to the button
contactMeButton.addEventListener('click', () => {
  // Toggle dark mode class on the body
  body.classList.toggle('dark-mode');

  // Toggle class for containers to change color
  containersToChangeColor.forEach(container => {
    container.classList.toggle('dark-mode');
  });

  // Toggle text content of the intro element
  if (introElement) {
    introElement.textContent = (introElement.textContent === initialText) ? "You like clicking buttons, huh?" : initialText;
  } else {
    console.error('Intro element not found');
  }
});


