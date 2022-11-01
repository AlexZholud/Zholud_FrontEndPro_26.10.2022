let typeOfOperation = prompt(`What type of operation will we do? Type the operand(+,-,* or /):`);
let firstNumber = prompt(`Great! Enter the first number:`);
let secondNumber = prompt(`Enter the second number:`);

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);


let addResult = (firstNumber + secondNumber);
let minResult = (firstNumber - secondNumber);
let multiResult = (firstNumber * secondNumber);
let divResult = (firstNumber / secondNumber);


if (typeOfOperation === `+`) {
    alert(`Your result:\n${addResult}`);
}
if (typeOfOperation === `-`) {
    alert(`Your result:\n${minResult}`);
}
if (typeOfOperation === `*`) {
    alert(`Your result:\n${multiResult}`);
}
if (typeOfOperation === `/`) {
    alert(`Your result:\n${divResult}`);
}


