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

    document.querySelector("#counter span").textContent = 0;
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
    //not working
    let span = document.querySelector("#clock-counter span");
    span.textContent = parseInt(span.textContent) + 1
}

function toStopInfinity() {
    //invalid
    clearInterval(stop)
}

function calculateMe() {
    let numba1 = document.getElementById("numba1").value;
    let numba2 = document.getElementById("numba2").value;
    let symbol = document.querySelector("#symbolMath").value;
    let results = document.getElementById("calcResults");

    if (symbol == "+") { results.innerHTML = parseInt(numba1) + parseInt(numba2) }
    else if (symbol == "-") { results.innerHTML = parseInt(numba1) - parseInt(numba2) }
    else if (symbol == "*") { results.innerHTML = parseInt(numba1) * parseInt(numba2) }
    else if (symbol == "/") { results.innerHTML = parseInt(numba1) / parseInt(numba2) };
}

function totolotoNacionalKural() {
    let loto1 = document.getElementById("loto1").value;
    let loto2 = document.getElementById("loto2").value;
    let loto3 = document.getElementById("loto3").value;
    let loto4 = document.getElementById("loto4").value;
    let loto5 = document.getElementById("loto5").value;
    let loto6 = document.getElementById("loto6").value;
    let yourArray = [parseInt(loto1), parseInt(loto2), parseInt(loto3), parseInt(loto4), parseInt(loto5), parseInt(loto6)]
    let lotoResults = 0
    let lotoArray = []
    for (i = 0; lotoArray.length < 6; i++) {
        let generatedNumber = Math.floor(Math.random() * 49) + 1;

        while (lotoArray.includes(generatedNumber) == true) {
            generatedNumber = Math.floor(Math.random() * 49) + 1;
        }
        lotoArray.push(generatedNumber);
    }
    document.getElementById("lotoNumber").textContent =  sortArray(lotoArray).join(' - ');
    document.getElementById("playerNumber").textContent = sortArray(yourArray).join(' - ');

    for (i = 0; i < lotoArray.length; i++) {
        if (lotoArray[i] == yourArray[i]) { lotoResults = lotoResults + 1 }
        else { lotoResults = lotoResults + 0 }
    };

    console.log(lotoResults)

    if (lotoResults == 6) { document.getElementById("lotoResults").innerHTML = "A Winner Is You!" }
    else if (lotoResults == 5) { document.getElementById("lotoResults").innerHTML = "2nd Prize!" }
    else if (lotoResults == 4) { document.getElementById("lotoResults").innerHTML = "3rd Prize!" }
    else { document.getElementById("lotoResults").innerHTML = "Maybe Next Time!" }
}

function generateTotolotoNumbers() {
    let totolotoNumbers = [];

    for (let i = 0; i < 6; i++) {
        let generatedNumber = Math.floor(Math.random() * 49) + 1;

        while (totolotoNumbers.includes(generatedNumber) == true) {
            generatedNumber = Math.floor(Math.random() * 49) + 1;
        }
        totolotoNumbers.push(generatedNumber);
    }
    return totolotoNumbers;
}

function totolotoResult() {
    let totolotoNumbers = generateTotolotoNumbers();
    let correctNumbers = [];
    let wrongNumbers = [];

    let inputList = document.querySelectorAll("#totolotoAula input");

    for (input of inputList) {
        console.log(input);

        let userNumber = parseInt(input.value);

        if (totolotoNumbers.includes(userNumber) == true) {
            correctNumbers.push(userNumber);
        } else {
            wrongNumbers.push(userNumber);
        }
    }

    document.querySelector("#totolotoAula .totoloto-num")
        .textContent = sortArray(totolotoNumbers).join(' - ');

    document.querySelector("#totolotoAula .correct-num")
        .textContent = sortArray(correctNumbers).join(' - ');

    document.querySelector("#totolotoAula .wrong-num")
        .textContent = sortArray(wrongNumbers).join(' - ');
}

function sortArray(list) {
    return list.sort(function (a, b) { return a - b })
}

// -------------------------------------------------
// ----------------- Ball animation ----------------
// -------------------------------------------------
let animationInterval;

document.querySelector('#theBall').addEventListener('click', ()=>{
    alert('You won!');
    stopBallAnimation();
});

function animateTheBall() {

    document.querySelector('#animationEx .start')
        .disabled = true;

    let ball = document.querySelector('#theBall');
    
    animationInterval = setInterval(()=>{
        
        ball.classList.toggle('hide');
        ball.style.top=generateRandomNumbers(100) + '%';
        ball.style.left=generateRandomNumbers(100) + '%';

        
        ball.style.width=generateRandomNumbers(300) + 'px';
        ball.style.height = ball.style.width;

    }, 1000);

}

function generateRandomNumbers(max) {
    return Math.floor(Math.random() * max);
}

function stopTheBall() {
    clearInterval(animationInterval);
    document.querySelector('#animationEx .start')
        .disabled = false;

}