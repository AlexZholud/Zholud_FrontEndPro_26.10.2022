let firstDigit = prompt(`Please enter the first digit.`);
let secondDigit = prompt(`Please enter the second digit.`);

firstDigit = Number(firstDigit);
secondDigit = Number(secondDigit);

let addResult = (firstDigit + secondDigit);
let minResult = (firstDigit - secondDigit);
let multiResult = (firstDigit * secondDigit);
let divResult = (firstDigit / secondDigit);

alert(`${firstDigit} + ${secondDigit} = ${addResult}\n${firstDigit} - ${secondDigit} = ${minResult}\n${firstDigit} * ${secondDigit} = ${multiResult}\n${firstDigit} / ${secondDigit} = ${divResult}` );