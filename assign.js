// ==========================
// Part 1: JavaScript Basics
// ==========================

// Variable declarations
let userName = "Ayo";
let useracct = 200;

// Conditional statement
if (useracct >= 200) {
  console.log(userName + " is rich");
} else {
  console.log(userName + " is a church rat!");
}

// Output results to the web page
document.getElementById("results").innerHTML += `<p>Hello ${userName}, Age: ${useracct}</p>`;


// ==========================
// Part 2: JavaScript Functions
// ==========================

// Function 1: Calculate total price
function calculateSum(price, quantity) {
  return price * quantity;
}

// Function 2: Format a string
function greetUser(fullname) {
    let fullname = 'Bisi';
  return `Welcome, ${fullname}!`;
}

// Using the functions
let total = calculateSum(10, 5);
document.getElementById("results").innerHTML += `<p>Total Price: $${total}</p>`;
document.getElementById("results").innerHTML += `<p>${greetUser(fullname)}</p>`;


// ==========================
// Part 3: Loops
// ==========================

// For loop example: Countdown
for (let i = 5; i > 0; i--) {
  console.log("Countdown: " + i);
}

// While loop example: Print numbers 1–5
let n = 1;
while (n <= 5) {
  document.getElementById("results").innerHTML += `<p>Number: ${n}</p>`;
  n++;
}


// ==========================
// Part 4: DOM Manipulation
// ==========================

// DOM Interaction 1: Change text on button click
document.getElementById("update-btn").addEventListener("click", function () {
  document.getElementById("welcome-text").textContent = "🎉 Text updated with JavaScript!";
});

// DOM Interaction 2: Toggle background color
document.getElementById("update-btn").addEventListener("dblclick", function () {
  document.body.style.backgroundColor = "#dff6ff";
});

// DOM Interaction 3: Create a new element dynamically
let newParagraph = document.createElement("p");
newParagraph.textContent = "This paragraph was added with JavaScript!";
document.getElementById("results").appendChild(newParagraph);