document.addEventListener("DOMContentLoaded", function() {
    const homeBtn = document.getElementById('homeBtn');
    const aboutBtn = document.getElementById('aboutBtn');
    const contactBtn = document.getElementById('contactBtn');
    const buttons = document.querySelectorAll('.nav-item');
  
    buttons.forEach(function(button) {
      button.addEventListener('click', function() {
        buttons.forEach(function(btn) {
          btn.classList.remove('active');
        });
  
        this.classList.add('active');
  
        // Set background color of the body based on the button clicked
        if (this.id === 'homeBtn') {
          document.body.style.backgroundColor = 'Silver';
        } else if (this.id === 'aboutBtn') {
          document.body.style.backgroundColor = 'Aliceblue';
        } else if (this.id === 'contactBtn') {
          document.body.style.backgroundColor = 'Gold';
        }
      });
    });
  
    homeBtn.addEventListener('click', displayHomeContent);
    aboutBtn.addEventListener('click', displayAboutContent);
    contactBtn.addEventListener('click', displayContactContent);
  
    function displayHomeContent() {
      // Update the content or perform any other action for the Home page
    }
  
    function displayAboutContent() {
      // Update the content or perform any other action for the About page
    }
  
    function displayContactContent() {
      // Update the content or perform any other action for the Contact page
    }
  });
  

// Get the elements
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.buttons');
let shouldEvaluate = false;
let hasPercentage = false;

// Add click event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;
    // Handle button clicks
    handleButtonClick(buttonText);
  });
});

// Handle button clicks
function handleButtonClick(buttonText) {
  if (shouldEvaluate) {
    clearDisplay();
    shouldEvaluate = false;
  }

  switch (buttonText) {
    case 'AC':
      clearDisplay();
      break;
    case 'DEL':
      deleteLastCharacter();
      break;
    case '=':
      evaluateExpression();
      break;
    case '%':
      calculatePercentage();
      break;
    default:
      appendToDisplay(buttonText);
      break;
  }
}

// Clear the display
function clearDisplay() {
  display.textContent = '0';
  hasPercentage = false;
}

// Delete the last character
function deleteLastCharacter() {
  if (display.textContent === '0') return;
  display.textContent = display.textContent.slice(0, -1);
}

// Evaluate the expression
function evaluateExpression() {
  try {
    let expression = display.textContent;
    if (hasPercentage) {
      expression = expression.replace(/%/g, '/100');
    }
    const result = eval(expression);
    display.textContent = result;
    shouldEvaluate = true;
  } catch (error) {
    display.textContent = 'Error';
  }
}

// Calculate percentage
function calculatePercentage() {
  try {
    const expression = display.textContent;
    const result = eval(expression) * 100;
    display.textContent = result + '%';
    hasPercentage = true;
  } catch (error) {
    display.textContent = 'Error';
  }
}

// Append the clicked button's text to the display
function appendToDisplay(buttonText) {
  if (display.textContent === '0') {
    display.textContent = buttonText;
  } else {
    display.textContent += buttonText;
  }
}

// Initialize display with 0
clearDisplay();