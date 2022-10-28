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
    Lisa: 5850628 , //not lisa number
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

function guessTheNumber (name) {
    for (key in phoneBook) {
        const contactName = key;
        if (name == contactName)
            return phoneBook[key];
    } 
    return "This Person Doesn't Exist!"
};

function longestStringInArray (aList){

}

function encodeString (string) {
    
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