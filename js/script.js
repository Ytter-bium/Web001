// Get DOM elements
const button = document.getElementById('alertBtn');
const messagePara = document.getElementById('message');

// Function to show alert and update paragraph
function handleClick() {
    alert('Hello, world!');
    messagePara.textContent = 'You clicked the button!';
}

// Attach event listener
button.addEventListener('click', handleClick);