function add() {
    let number1 = parseFloat(document.getElementById("number1").value);
    let number2 = parseFloat(document.getElementById("number2").value);
    document.getElementById("result").innerText =
        "Result : " + (number1 + number2);
}
function subtract() {
    let number1 = parseFloat(document.getElementById("number1").value);
    let number2 = parseFloat(document.getElementById("number2").value);
    document.getElementById("result").innerText =
        "Result : " + (number1 - number2);
}
function multiply() {
    let number1 = parseFloat(document.getElementById("number1").value);
    let number2 = parseFloat(document.getElementById("number2").value);
    document.getElementById("result").innerText = "Result : " + number1 * number2;
}
function divide() {
    let number1 = parseFloat(document.getElementById("number1").value);
    let number2 = parseFloat(document.getElementById("number2").value);
    if (number1 == 0) {
        document.getElementById("result").innerText = "Can not divide by 0";
        return;
    }
    document.getElementById("result").innerText = "Result : " + number1 / number2;
}
function square() {
    let number1 = parseFloat(document.getElementById("number1").value);

    document.getElementById("result").innerText = "Result : " + number1 * number1;
}
function cube() {
    let number1 = parseFloat(document.getElementById("number1").value);

    document.getElementById("result").innerText =
        "Result : " + number1 * number1 * number1;
}
function resetCalculator() {
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
    document.getElementById("result").innerText = "";
}

