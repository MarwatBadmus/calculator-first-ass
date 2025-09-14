/* Part 2: JavaScript Functions, Scope, Parameters & Return Values */

// Global variable
let animationCount = 0;

// Function with parameter & return value
function incrementCount(count) {
  return count + 1;
}

// Local vs Global scope demo
function logScope() {
  let localMessage = "I'm inside the function scope!";
  console.log(localMessage); // accessible here
}
logScope();
// console.log(localMessage); // ❌ would cause an error

/* Part 3: Combining CSS + JavaScript */

// Animate box when button clicked
const box = document.getElementById("animate-box");
const triggerBtn = document.getElementById("trigger-btn");

triggerBtn.addEventListener("click", () => {
  box.classList.add("move");
  
  // track animations
  animationCount = incrementCount(animationCount);
  console.log("Box animated times:", animationCount);

  // remove animation class after it ends so it can re-trigger
  setTimeout(() => {
    box.classList.remove("move");
  }, 2000);
});

// Modal popup demo
const openModal = document.getElementById("open-modal");
const closeModal = document.getElementById("close-modal");
const modal = document.getElementById("modal");

openModal.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("show");
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
  setTimeout(() => modal.classList.add("hidden"), 500); // wait for fade
});