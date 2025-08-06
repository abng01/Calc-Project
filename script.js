let firstValueArray = []
let secondValueArray = []
let operator

function getValueFromId(id) {
    let number = document.getElementById(`${id}`).innerHTML
    if (operator) {
        secondValueDisplay(number)
    } else {
        firstValueDisplay(number)
    }
}

function firstValueDisplay(value) {
    firstValueArray.push(value)
    let firstValue = firstValueArray.join('')
    document.getElementById('result').innerHTML = firstValue
}

function secondValueDisplay(value) {
    secondValueArray.push(value)
    let secondValue = secondValueArray.join('')
    document.getElementById('result').innerHTML = secondValue
}

function getOperator(id) {
    let operatorHTML = document.getElementById(`${id}`).innerHTML
    operator = operatorHTML
    document.getElementById('result').innerHTML = operator
}

function calculate() {
    let firstValue = Number(firstValueArray.join(''))
    console.log(firstValue)
    let secondValue = Number(secondValueArray.join(''))
    console.log(secondValue)     
    let result

    switch (operator) {
        case '+':
            result = firstValue + secondValue
            showCalculation(result)
            break;
        case '-':
            result = firstValue - secondValue
            showCalculation(result)
            break;
        case 'x':
            result = firstValue * secondValue
            showCalculation(result)
            break;
        case '÷':
            result = firstValue / secondValue
            showCalculation(result)
            break;
        default:
            break;
    }
}

function showCalculation(output) {
    document.getElementById('result').innerHTML = output
    console.log(output)
}

function reset() {
    firstValueArray = []
    secondValueArray = []
    operator = null
    document.getElementById('result').innerHTML = 0
}