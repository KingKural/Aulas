function helloThere(name) {
    let greetingText = "Hello! How are you today " + name + "?";
    return greetingText
};

function myConcat(list1, list2) {
    for (i in list1) { list1[i] = list1[i] + list2 }
    return list1
};

function calculation(a, b, operator) {
    let total = 0;
    if (operator == "+") { total = a + b }
    else if (operator == "-") { total = a - b }
    else if (operator == "*") { total = a * b }
    else if (operator == "/") { total = a / b }
    return total
};

let phoneBook = {
    Abel: 5802943,
    Laura: 9761405,
    Lisa: 5850628, //not lisa number
    Adilson: 9240912,
    Victor: 9519228
};


function guessThePhone(number) {
    for (key in phoneBook) {
        const savedPhoneNumber = phoneBook[key];
        if (number == savedPhoneNumber)
            return key;
    }
};

function guessTheNumber(name) {
    for (key in phoneBook) {
        const contactName = key;
        if (name == contactName)
            return phoneBook[key];
    }
    return "This Person Doesn't Exist!"
};

function longestStringInArray(aList) {

}

function encodeString(string) {

}


function times2(list) {
    for (i in list) { list[i] = list[i] * 2 }
    return list
};

function sum(a, b) {
    return a + b
};

function multiplication(a, b) {
    return a * b
};

function division(a, b) {
    return a / b
};

function subtract(a, b) {
    return a - b
};

function guessTheNumber2(name) {
    if (phoneBook[name] == undefined) {
        return "The name" + name + " is not registered!";
    }
    return phoneBook[name];

}

function addPhoneNumber2(name, number) {
    phoneBook[name] = number;
    return phoneBook;
}

function deletePhoneNumber(name) {
    delete phoneBook[name];
    return phoneBook;
}

function managePhoneBook(name, number, operation) {
    if (operation == "add") {
        return addPhoneNumber2(name, number)

    } else if (operation == "remove") {
        return deletePhoneNumber(name)
    }
    else if (operation == "find") {
        return guessTheNumber2(name)
    }
    else { return "Action Not Possible" };

}

let phoneBook2 = {

};

function guessTheNumber3(name) {
    if (phoneBook2[name] == undefined) {
        return "The name" + name + " is not registered!";
    }
    return phoneBook2[name];

}

function addPhoneNumber3(name, number) {
    phoneBook2[name] = number;
    return phoneBook2;
}

function deletePhoneNumber2(name) {
    console.log(phoneBook2);
    delete phoneBook2[name];
    return phoneBook2;
}

function managePhoneBook2(name, number, operation) {
    if (operation == "add") {
        return addPhoneNumber3(name, number)

    } else if (operation == "remove") {
        return deletePhoneNumber2(name)
    }
    else if (operation == "find") {
        return guessTheNumber3(name)
    }
    else { return "Action Not Possible" };

}

function spellingBee(string) {
    for (i in string) {
        console.log(string[i]); i++;
    }
}

function spellingBee2(string) {
    for (let i = 0; i < string.length; i++) { console.log(string[i]) }
}

function spellingBee2Behind(string) {
    for (let i = string.length - 1; i >= 0; i--) { console.log(string[i]) }
}

function countVowel(string) {
    string = string.toLocaleLowerCase();
    let vowelCount = 0
    for (let i = 0; i < string.length; i++) {

        if (string[i] == "a" || string[i] == "e" || string[i] == "i" || string[i] == "o" || string[i] == "u") { vowelCount++ }
    }
    return vowelCount;

}

function turnIntoAsterisk(text) {
    let textTurned = "";

    for (i = 0; i < text.length; i++) { textTurned = textTurned + "*" }
    return textTurned;
}

function searchingFor(string, word) {
    //using the .includes(text-here) string method to find a word in a string
    lowered = string.toLocaleLowerCase();
    result = lowered.includes(word)
    return result;

}

function startsWith(stringToSearch, wordToFind) {
    //using the .startsWith(text goes here) string method
    return stringToSearch.startsWith(wordToFind);
}

function startWithV2(stringToSearch, wordToFind) {
    // using the .substring(#,#) string method
    let firstWord = stringToSearch.substring(0, wordToFind.length)
    return firstWord == wordToFind;
}

function startWithV3(stringToSearch, wordToFind) {
    //using for loop with extra steps
    let firstWord = ""
    for (i = 0; i < stringToSearch.length; i++) {
        if (stringToSearch[i] == wordToFind[i]) { firstWord = firstWord + stringToSearch[i] }
    }
    return firstWord == wordToFind;
}

function startWithV4(stringToSearch, wordToFind) {
    //using a for loop method
    for (i = 0; i < wordToFind.length; i++) {
        if (stringToSearch[i] !== wordToFind[i]) { return false }
    }
    return true;
}

function startWithV5(stringToSearch, wordToFind) {
    //using the .slice(#,#) string method
    let sliced = stringToSearch.slice(0, wordToFind.length)
    return sliced === wordToFind;
}


function concString(text, value = 1) {
    //using the for loop method
    let concatenation = "";
    for (i = 0; i < value; i++) { concatenation = concatenation + text }

    return concatenation;
}


function concStringV2(text, value = 1) {
    //using the .repeat(#) string method
    return text.repeat(value);
}

function removeThings(text) {
    let removed = text;
    let removed2 = "";
    let removed3 = "";
    let removed4 = "";
    let removed5 = "";
    let removed6 = "";
    for (let i = 0; i < removed.length; i++) {
        removed2 = removed.replaceAll("&", "");
        removed3 = removed2.replaceAll("<", "");
        removed4 = removed3.replaceAll(">", "");
        removed5 = removed4.replaceAll("\'", "");
        removed6 = removed5.replaceAll("\"", "");
    }
    return removed6;
}

function chunkString(text, value = 1) {
    //using .slice(#,#) string method
    let chunkedString = [];
    if (value == 1) { chunkedString.push(text) } else {
        for (let i = 0; i < text.length; i = i + value) {
            chunkedString.push(text.slice(i, i + value));
        }

    }
    return chunkedString;
}

function chunkStringV2(text, value = 1) {
    //using if else method
    let chunkedString = []
    let chunkedPiece = "";
    if (value == 1) { chunkedString.push(text); }
    else {
        for (let i = 0; i < text.length; i++) {
            chunkedPiece = chunkedPiece + text[i];
            if (chunkedPiece.length == value) {
                chunkedString.push(chunkedPiece);
                chunkedPiece = "";
            }
        }
    }
    chunkedString.push(chunkedPiece);
    return chunkedString;
}

function chunkStringV3(text, value = 1) {
    //using .substring(#,#) string method
    let chunkedString = [];
    if (value == 1) { chunkedString.push(text) } else {
        for (let i = 0; i < text.length; i = i + value) {
            chunkedString.push(text.substring(i, i + value));
        }
    }
    return chunkedString;
}


function itsVaderTime(symbol) {
    // too many steps
    let data = new Date();
    let dataCut = data.getDate() + "/" + data.getMonth() + "/" + data.getFullYear();
    let dataSlash = data.getDate() + "-" + data.getMonth() + "-" + data.getFullYear();

    if (symbol == "/") { return dataCut }
    else if (symbol == "-") { return dataSlash }
    else { return "Invalid" }
}

function itsVaderTimeV2(symbol) {
    // .getMonth() values range from 0-11,  so adding a +1 you get the "correct" month display
    let data = new Date();
    const month = data.getMonth() + 1
    let dataSymbol = data.getDate() + symbol + month + symbol + data.getFullYear();
    if (symbol) { return dataSymbol; }
    else { return "Invalid" }
}

function itsVaderTimeV3(symbol) {
    // turning the .getMonth() value and turning it into a String of said Month
    let data = new Date();
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let dataSymbol = data.getDate() + symbol + month[data.getMonth()] + symbol + data.getFullYear();

    if (symbol) { return dataSymbol; }
    else { return "Invalid" }

}

function itsVaderTimeClash(vader1, vader2) {
    let vaderTime1 = vader1;
    let vaderTime2 = vader2;

    if (vaderTime1 < vaderTime2) { return "Date-2 > Date-1" }
    else if (vaderTime1 > vaderTime2) { return "Date-1 > Date-2" }
    else if (vaderTime1.getTime() === vaderTime2.getTime()) { return "Dates Are Equal" }
};

function itsVaderTimeClashV2(vader1, vader2) {
    let vaderTime1 = new Date(vader1);
    let vaderTime2 = new Date(vader2);

    if (vaderTime1 < vaderTime2) { return "Date-2 > Date-1" }
    else if (vaderTime1 > vaderTime2) { return "Date-1 > Date-2" }
    else if (vaderTime1.getTime() === vaderTime2.getTime()) { return "Dates Are Equal" }
};

function itsVaderTimeBomb(hour) {
    let data = new Date();
    return newData = new Date(data.setHours(hour)).toString();
}
function itsVaderTimeBombV2(date, hour) {
    return newData = new Date(date.setUTCHours(date.getHours() + 1 + hour));
}

function weekEnd(data) {

    const weekDay = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

    if (data.getDay() == 0 || data.getDay() == 5 || data.getDay() == 6) {
        return "Lelelelê! Leleleô! Hoje é " + weekDay[data.getDay()] + "!"
    }
    else {
        return "Dia de Trabalho"
    }
}

function dayBeforeTomorrow(day) {
    return new Date(day.setDate(day.getDate() - 1));
}

function biggestDay(day1, day2, day3) {
    if (day1.getTime() > day2.getTime() && day1.getTime() > day3.getTime()) { return day1.getDate() + "/" + day1.getMonth() + "/" + day1.getFullYear() }
    else if (day2.getTime() > day1.getTime() && day2.getTime() > day3.getTime()) { return day2.getDate() + "/" + day2.getMonth() + "/" + day2.getFullYear() }
    else if (day3.getTime() > day2.getTime() && day3.getTime() > day1.getTime()) { return day3.getDate() + "/" + day3.getMonth() + "/" + day3.getFullYear() }
    else { return "The dates are Equal!" }
}

function smalestDay(day1, day2, day3) {
    if (day1.getTime() < day2.getTime() && day1.getTime() < day3.getTime()) { return day1.getDate() + "/" + day1.getMonth() + "/" + day1.getFullYear() }
    else if (day2.getTime() < day1.getTime() && day2.getTime() < day3.getTime()) { return day2.getDate() + "/" + day2.getMonth() + "/" + day2.getFullYear() }
    else if (day3.getTime() < day2.getTime() && day3.getTime() < day1.getTime()) { return day3.getDate() + "/" + day3.getMonth() + "/" + day3.getFullYear() }
    else { return "The dates are Equal!" }
}

function smalestDayV2(dates) {
    let minDate = undefined;
    for (let i = 0; i < dates.length; i++) {
        if (i == 0) {
            minDate = dates[i];
        } else {
            if (minDate > dates[i]) {
                minDate = dates[i];
            }
        }
    }
    return minDate
}

function biggestDayV2(dates) {
    let maxDate = undefined;
    for (let i = 0; i < dates.length; i++) {
        if (i == 0) {
            maxDate = dates[i];
        } else {
            if (maxDate < dates[i]) {
                maxDate = dates[i];
            }
        }
    }
    return maxDate
}

function whatDay(dataToSearch) {
    const weekDay = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    return "Hoje é " + weekDay[dataToSearch.getDay()] + "!"
}

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
    msg.value = "\"Kenobi!\""
}

function getNumber() {
    //let textInput = numero.value;
    document.getElementById("showNumber").innerHTML += numero.value +"<p></p>"
}

function getRandomNumber() {

    let nbr = Math.floor(Math.random() * 101)
    //let textInput = numero.value;
    document.getElementById("showNumber").innerHTML += numeroR.value + " " + nbr + "<p></p>"
}

function getSum() {
    let valor1 = document.getElementById("soma1").value;
    let valor2 = document.getElementById("soma2").value;
    let _valor1 = parseInt(valor1), _valor2 = parseInt(valor2)

    document.getElementById("resultadoSoma").innerHTML = _valor1 + _valor2;
}
