let symbolInput = "";

function calcButtonPlus() {
    symbolInput = document.getElementById("calculatorDisplay");
    let symbol = "+"
    if (symbolInput.textContent.includes("+") || symbolInput.textContent.includes("-") || symbolInput.textContent.includes("x") || symbolInput.textContent.includes("÷")) { symbolInput.textContent = symbolInput.textContent }
    else { symbolInput.textContent += symbol }

    return symbolInput;
}

/*function calcButtonPlus() {
    symbolInput = document.getElementById("calculatorDisplay");
    let symbol = "+"
    if (symbolInput.textContent.at(-1) == "÷" || symbolInput.textContent.at(-1) == "x" || symbolInput.textContent.at(-1) == "-" || symbolInput.textContent.at(-1) == "+") { symbolInput.textContent = symbolInput.textContent }
    else { symbolInput.textContent += symbol }
 
    return symbolInput;
}*/

function calcButtonMinus() {
    symbolInput = document.getElementById("calculatorDisplay");
    let symbol = "-"
    if (symbolInput.textContent.includes("+") || symbolInput.textContent.includes("-") || symbolInput.textContent.includes("x") || symbolInput.textContent.includes("÷")) { symbolInput.textContent = symbolInput.textContent }
    else { symbolInput.textContent += symbol }

    return symbolInput;
}

function calcButtonTimes() {
    symbolInput = document.getElementById("calculatorDisplay");
    let symbol = "x"
    if (symbolInput.textContent.includes("+") || symbolInput.textContent.includes("-") || symbolInput.textContent.includes("x") || symbolInput.textContent.includes("÷")) { symbolInput.textContent = symbolInput.textContent }
    else { symbolInput.textContent += symbol }

    return symbolInput;
}

function calcButtonDivides() {
    symbolInput = document.getElementById("calculatorDisplay");
    let symbol = "÷"
    if (symbolInput.textContent.includes("+") || symbolInput.textContent.includes("-") || symbolInput.textContent.includes("x") || symbolInput.textContent.includes("÷")) { symbolInput.textContent = symbolInput.textContent }
    else { symbolInput.textContent += symbol }

    return symbolInput;
}