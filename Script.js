// ===================== Part 1: Variables & Conditionals =====================
let userName = "Rita";
let age = 20;

const output = document.getElementById("output");

if (age >= 18) {
    output.textContent = userName + " is an adult.";
} else {
    output.textContent = userName + " is not an adult.";
}

// ===================== Part 2: Custom Functions =====================
function greetUser(name) {
    return "Hello, " + name + "!";
}

function calculateSquare(number) {
    return number * number;
}

// Display custom functions output
const functionsOutput = document.getElementById("functionsOutput");
functionsOutput.innerHTML = `
Greet User: ${greetUser(userName)} <br>
Square of 5: ${calculateSquare(5)}
`;

// ===================== Part 3: Loop Examples =====================
const loopsOutput = document.getElementById("loopsOutput");

// For loop
let forLoopText = "For Loop (1 to 5): ";
for (let i = 1; i <= 5; i++) {
    forLoopText += i + " ";
}

// While loop
let whileLoopText = "<br>While Loop (1 to 3): ";
let count = 1;
while (count <= 3) {
    whileLoopText += count + " ";
    count++;
}

// Show loops on page
loopsOutput.innerHTML = forLoopText + whileLoopText;

// ===================== Part 4: DOM Interactions =====================
const header = document.getElementById("header");
header.style.color = "green";  // Change header color

const button = document.getElementById("clickBtn");
button.addEventListener("click", function() {
    output.textContent = greetUser(userName) + " — Age: " + age;
});
