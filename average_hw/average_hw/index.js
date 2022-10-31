let arrayBlock = [
firstNumber = prompt(`Please enter the first number:`),
secondNumber = prompt(`Please enter the second number:`),
thirdNumber = prompt(`Please enter the third number:`)
]
firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);
thirdNumber = Number(thirdNumber);


let sumOfNumbers = (firstNumber + secondNumber + thirdNumber);

let average = (sumOfNumbers / arrayBlock.length );

alert(`Your arithmetical mean is:\n${average} `);
