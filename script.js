let firstValueArray = []
let secondValueArray = []

function firstValue(value) {
    firstValueArray.push(value)
    let firstValue = firstValueArray.join('')
    return firstValue
}

console.log(firstValue(4))
console.log(firstValue(8))
console.log(firstValue(4))
console.log(firstValue(8))

function secondValue(value) {
    secondValueArray.push(value)
    let secondValue = secondValueArray.join('')
    return secondValue
}

console.log(secondValue(4))
console.log(secondValue(8))
console.log(secondValue(4))
console.log(secondValue(8))

function calculate(firstValue, secondValue, operator) {
    let result
    switch (operator) {
        case '+':
            result = firstValue + secondValue
            return result
        case '-':
            result = firstValue - secondValue
            return result
        case '*':
            result = firstValue * secondValue
            return result
        case '/':
            result = firstValue / secondValue
            return result
        default:
            break;
    }
}

console.log(calculate(12, 3, '+'))
console.log(calculate(12, 3, '-'))
console.log(calculate(12, 3, '*'))
console.log(calculate(12, 3, '/'))

let number = document.getElementById('one').innerHTML
console.log(number)
