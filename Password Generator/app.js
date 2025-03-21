// Selecting necessary DOM elements
let indicator = document.querySelector("#indicator");
let pLength = document.querySelector("#pLength");
let passBox = document.querySelector("#passBox");
let lower = document.querySelector("#lower");
let upper = document.querySelector("#upper");
let number = document.querySelector("#number");
let symbol = document.querySelector("#symbol");
let genBtn = document.querySelector("#generate");
let length = document.querySelector("#val");
let error = document.querySelector("#emsg");
let copyText = document.querySelector("#copyText");
let check = document.querySelector("#check");
let copied = document.querySelector("#copied");

// Set the default value of the password length indicator when the page loads
length.innerText = indicator.value;

// Update the displayed length when the user adjusts the range input
indicator.addEventListener("input", () => {
  length.innerText = indicator.value;
});

// Clear the password field initially
passBox.value = "";

// Event listener for the "Generate" button
genBtn.addEventListener("click", () => {
  // Validate that the selected password length is at least 6 characters
  if (indicator.value < 6) {
    passBox.value="";
    error.innerText = "Please select a length greater than 6.";
    error.style.color = "red";
  } else {
    error.style.display = "none";
    error.innerText = "Your password is ready!";
    error.style.display = "block";
    error.style.color = "green";
    
    // Generate and display the password
    passBox.value = generatePwd();
  }
});

// Define character sets for password generation
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let specialChars = "~!@#$%^&*()_|{}[]=-?><,./";

// Function to generate a random password
function generatePwd() {
  let genPass = "";
  let allChars = "";

  // Include selected character types in the pool
  if (lower.checked) allChars += lowerChars;
  if (upper.checked) allChars += upperChars;
  if (number.checked) allChars += numbers;
  if (symbol.checked) allChars += specialChars;

  // Generate a password of the specified length
  for (let i = 0; i < indicator.value; i++) {
    let genChar = allChars.charAt(Math.floor(Math.random() * allChars.length));
    genPass += genChar;
  }

  return genPass;
}

// Variable to track if the copy button has been used
let turn = 0;

// Function to handle the copy-to-clipboard feature
function changeCheck() {
  if (turn === 0) {
    copyText.addEventListener("click", () => {
      navigator.clipboard.writeText(passBox.value);
      copyText.style.display = "none";
      check.style.display = "flex"; 
      copied.innerHTML = `Copied! 😊`; 
      turn++;
    });
  }
}
changeCheck();

// Event listener for the "Already Copied" button
check.addEventListener("click", () => {
  copied.innerHTML = `Already Copied! 😊`;
});
