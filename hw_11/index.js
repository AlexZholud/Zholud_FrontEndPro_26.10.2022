//1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
const task1 = [];

for (let i = 20; i <= 30; i = i + 0.5) {
    task1.push(i);

}
console.log(task1);
//2. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
let usdToUah = 27;
const usdToUahArr = [];

for (let i = 10; i <= 100; i = i + 10) {

    usdToUahArr.push(`${usdToUah * i}`);

}
console.log(usdToUahArr);

//3. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
const task3num = Number(prompt('input the number for task3:'));
const task3arr = [];

    for (let i=1; i<=100; i++) {
        if(  i * i <= task3num ) {
        task3arr.push(i);
        }
    }
console.log(task3arr);
//4. Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
const task4num = Number(prompt('input the number for task4:'));
let isTask4simple = 'It is a simple number';

    for (let i=2; i<task4num; i++) {
     if (task4num % i === 0 ) {
         isTask4simple = 'It isn\'t a simple number';
         break;
     }
}
console.log(isTask4simple)


//5. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
const task5num = Number(prompt('input the number for task5:'));
let isTask5true = 'Nooo'

for (let i=1; i<=task5num; i++) {
    if (Math.pow(3,i) === task5num) {
        isTask5true = 'Yeah'
    }
}
console.log(isTask5true);