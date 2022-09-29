function calc() {
    // TODO: sum = num1 + num2
    let firstNum = Number(document.getElementById('num1').value);
    let secondNum = Number(document.getElementById('num2').value);
    let sum = firstNum + secondNum;
    document.getElementById('sum').value = sum;
}
