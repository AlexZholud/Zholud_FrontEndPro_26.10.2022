// // 1.Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

const differentTypesArr = [7, 77, 777, 7777, '77777'];

const averageArrayOfNumbers = (arr) => {
    const onlyNum = arr.filter((value) => typeof value === 'number');
    // const len = onlyNum.length;
    return onlyNum.reduce((acc, value) => (acc + value)) / onlyNum.length;
}
console.log(averageArrayOfNumbers(differentTypesArr));

// // 2.Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

const firstDigit = Number(prompt('Enter the first digit:'));
const operand = prompt('Enter one of operands: +  -  *  /  %  ^');
const secondDigit = Number(prompt('Enter the second digit:'));

const doMath = (x, znak, y) => {
   switch (znak) {
      case '+': return x + y;
      case '-': return x - y;
      case '*': return x * y;
      case '/': return x / y;
      case '%': return x % y;
      case '^': return x ** y;
      default: throw Error('Error!');
   }
}

console.log(doMath(firstDigit, operand, secondDigit));

// // 3. Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

const lengthGeneralArray = Number(prompt('Enter length for array:'));
const elementsArray = (arrayLength) => {
    if (arrayLength <= 0) {
        return [];
    } else {
        const generalArray = elementsArray(arrayLength - 1);
        const itemLength = Number(prompt(`Enter length for subarray:`));
        generalArray.push(elementsArray(itemLength));
        return generalArray;
    }
}

const elementsSubarray = (subArrayLength) => {
    if (subArrayLength <= 0) {
        return [];
    } else {
        const subArray = elementsSubarray(subArrayLength - 1);
        const value = prompt('Enter something here for subarray:');
        subArray.push(value);
        return subArray;
    }
}

console.log(elementsArray(lengthGeneralArray));

// 4. Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

const userStr = prompt('Enter something here:');
const symbolsForDeleting = prompt('Enter the symbols for deleting:');
const symbols = [...symbolsForDeleting];

const deleteSymbols = (content, elements) => [...content].filter(element => !elements.includes(element)).join('');

console.log(deleteSymbols(userStr, symbols));
