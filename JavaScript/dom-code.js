function todayDiv() {
    let dC = new Date();

    let dataToShow = dC.getDate() + "/" + dC.getMonth() + "/" + dC.getFullYear()

    document.getElementById("data").innerHTML = dataToShow
}


function sendText() {
    let msg = document.getElementById("msg");
    msg.innerHTML += " Kenobi!"
}

function sendTextV2(text) {
    let textToSend = text;
    let msg = document.getElementById("msg");
    msg.innerHTML += textToSend
}

function addNameForm() {
    let msg = document.getElementById("nome");
    if (nome.value == "") { msg.value = "Kenobi!" }
    else document.getElementById("msg").innerHTML += " " + nome.value
}

function getNumber() {
    //let textInput = numero.value;
    let msg = document.getElementById("numero");
    if (numero.value == "") { msg.value = "1" }
    else
        document.getElementById("showNumber").innerHTML += numero.value + "<br>"
    numero.value = ""
}

function getRandomNumber() {

    let nbr = Math.floor(Math.random() * 101)
    //let textInput = numero.value;
    document.getElementById("showNumber").innerHTML += nbr + "<br>"
}

function getSum() {
    let valor1 = document.getElementById("soma1").value;
    let valor2 = document.getElementById("soma2").value;
    let _valor1 = parseInt(valor1), _valor2 = parseInt(valor2)

    document.getElementById("resultadoSoma").innerHTML = _valor1 + _valor2;
}

function listCounter() {
    let listedNumber = undefined;
    for (i = 1; i <= 10; i++) {
        if (listedNumber = i) { document.querySelector("#list-Counted").appendChild(document.createElement("li")).innerHTML = listedNumber }

    }
}

function listCounter2() {
    let msg = document.getElementById("texto1");
    if (texto1.value == "") { msg.value = "Kenobi!" }
    else
        document.querySelector("#list-Counted2").appendChild(document.createElement("li")).innerHTML += texto1.value;
    texto1.value = "";

}

function alertTheCount() {
    let listedItem = "";
    let liArray = document.querySelectorAll("#list-Counted li")
    for (i of liArray) { listedItem = listedItem += " " + i.textContent }
    alert(listedItem)
}

function messageTheCount() {
    let listedItem = "";
    let liArray = document.querySelectorAll("#list-Counted li")
    for (i of liArray) { listedItem = listedItem += "Message" + i.textContent }
    return listedItem
}

function alertTheMessages() {
    let listedItem = "";

    let liArray = document.querySelectorAll("#message-list p")

    for (i of liArray) { listedItem = listedItem += i.textContent + "\n" }

    alert(listedItem)
}

function countUp() {
    let span = document.querySelector("#counter span");

    if (span.textContent <= 9) { span.textContent = parseInt(span.textContent) + 1 };
    colorChange(span)
}

function countDown() {
    let span = document.querySelector("#counter span");

    if (span.textContent >= 2) { span.textContent = parseInt(span.textContent) - 1 };
    colorChange(span)
}

function resetIt() {
    let span = document.querySelector("#counter span");

    document.querySelector("#counter span").textContent = 1;
    colorChange(span)
}

function colorChange(span) {
    if (span.textContent <= 4) { span.style.color = "red" }
    else { span.style.color = "Green" }
}

function color() {
    let cor = document.querySelector("#colorToSelect").value
    document.querySelector(".colorBox").style.backgroundColor = cor
}

let stop = undefined;

function toInfinity() {
    let span = document.querySelector("#clock-counter span");
    span.textContent = parseInt(span.textContent) + 1
}

function toStopInfinity() {
    clearInterval(stop)
}