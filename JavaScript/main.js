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
    for (let i =0; i < string.length; i++) {console.log(string[i])}
}

function spellingBee2Behind(string) {
    for (let i =string.length-1; i>=0; i--) {console.log(string[i])}
}

