let num1 = 0
let num2 = 0
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sumEl = document.getElementById("sum-el")

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"
function add() {
    let sum = num1 + num2
    sumEl.textContent = sum
}

function subtract() {
    let sum = num1 - num2
    sumEl.textContent = sum
}

function divide() {
   let sum = num1 / num2
   sumEl.textContent = sum

}

function multiply() {
    let sum = num1 * num2
    sumEl.textContent = sum
}

function One() {
    num1 = +prompt("Please enter a value for the first variable: ")
    document.getElementById("num1-el").textContent = num1

}

function Two() {
    num2 = +prompt("Please enter a value for the second variable: ")
    document.getElementById("num2-el").textContent = num2
}

