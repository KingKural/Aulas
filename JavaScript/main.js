
function helloThere(name) {
    let greetingText = "Hello! How are you today " + name + "?";
    return greetingText
};

function myConcat(list1,list2) {
    for (i in list1) { list1[i] = list1 [i] + list2}
    return list1
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