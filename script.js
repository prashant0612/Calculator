// Initialize a variable to store memory
let memory = 0;

// Function to clear the display
function clearDisplay() {
    document.getElementsByName("display")[0].value = '';
}

// Function to delete the last character in the display
function deleteLastChar() {
    const display = document.getElementsByName("display")[0];
    display.value = display.value.slice(0, -1);
}

// Function to calculate the square root of the displayed value
function calculateSquareRoot() {
    const display = document.getElementsByName("display")[0];
    display.value = Math.sqrt(parseFloat(display.value));
}

// Function to calculate the percentage of the displayed value
function calculatePercentage() {
    const display = document.getElementsByName("display")[0];
    display.value = (parseFloat(display.value) / 100).toString();
}

// Function to append a value to the display
function appendToDisplay(value) {
    const display = document.getElementsByName("display")[0];
    display.value += value;
}

// Function to calculate the result of the expression in the display
function calculateResult() {
    const display = document.getElementsByName("display")[0];
    display.value = eval(display.value);
}

// Function to add the displayed value to memory
function addToMemory() {
    const display = document.getElementsByName("display")[0];
    memory += parseFloat(display.value);
}

// Function to subtract the displayed value from memory
function subtractFromMemory() {
    const display = document.getElementsByName("display")[0];
    memory -= parseFloat(display.value);
}

// Function to recall the value from memory and display it
function recallMemory() {
    const display = document.getElementsByName("display")[0];
    display.value = memory.toString();
}

// Function to clear the memory
function clearMemory() {
    memory = 0;
}