let totalInput = "";

function calcButtonTotal() {
    let toSplit = document.getElementById("calculatorDisplay");
    let splited = []
    let totalSplited = 0

    if (toSplit.textContent.includes("+") ) { splited = toSplit.textContent.split("+")}
    else if (toSplit.textContent.includes("-") ) { splited = toSplit.textContent.split("-")}
    else if(toSplit.textContent.includes("x") ) { splited = toSplit.textContent.split("x")}
    else if (toSplit.textContent.includes("÷") ) { splited = toSplit.textContent.split("÷")}

    
    if (toSplit.textContent.includes("+") ) {totalSplited = parseInt(splited[0]) + parseInt(splited[1])}
    else if (toSplit.textContent.includes("-") ) {totalSplited = parseInt(splited[0]) - parseInt(splited[1])}
    else if(toSplit.textContent.includes("x") ) {totalSplited = parseInt(splited[0]) * parseInt(splited[1])}
    else if (toSplit.textContent.includes("÷") ) {totalSplited = parseInt(splited[0]) / parseInt(splited[1])}

    
    let total = document.getElementById("calculatorDisplay").textContent = totalSplited
    console.log(total)
    return total
}