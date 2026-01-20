let display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        // Replace ^ with Math.pow
        let expression = display.value.replace(/(\d+)\^(\d+)/g, "Math.pow($1,$2)");
        display.value = eval(expression);
    } catch {
        display.value = "Error";
    }
}

// Optional: Keyboard support
document.addEventListener('keydown', function(e) {
    const allowedKeys = "0123456789+-*/().%";
    if(allowedKeys.includes(e.key)) appendValue(e.key);
    if(e.key === "Enter") calculate();
    if(e.key === "Backspace") deleteLast();
    if(e.key === "Delete") clearDisplay();
});








