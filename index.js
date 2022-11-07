// 1. Вивести на сторінку в один рядок через кому числа від 10 до 20.
const task1 = [];

for (let i=10; i<21; i++) {
    task1.push(i);
}
console.log(task1);
// 2. Вивести квадрати чисел від 10 до 20.
const task2 = [];

for (let i=10; i<21; i++){
    task2.push(i**2);
}
console.log(task2);
// 3. Вивести таблицю множення на 7.
const task3 = [];

for (let i=1; i<11; i++) {
    task3.push(`${i} * 7 = ${i*7}`);
}
console.log(task3);
// 4. Знайти суму всіх цілих чисел від 1 до 15.
let task4 = 0;

for (let i=1; i<16; i++) {
    task4 = task4 + i;
}
console.log(task4);
// 5. Знайти добуток усіх цілих чисел від 15 до 35.
let task5 = 1;

for (let i=15; i<36; i++) {
    task5 = task5 * i;
}
console.log(BigInt(task5));
// 6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
const task6arr = [];
let task6num = 0;

for (let i=1; i<501; i++) {
    task6num = task6num + i;
    task6arr.push(task6num);
}

const average = task6num / task6arr.length

console.log(average);
// 7. Вивести суму лише парних чисел в діапазоні від 30 до 80.
let task7 = 0

for (let i=30; i<81; i++) {
    if (i % 2 === 0){
        task7 = task7 + i;
    }
}
console.log(task7);
// 8. Вивести всі числа в діапазоні від 100 до 200 кратні 3.
const task8 = [];

for (let i=100; i<201; i++) {
    if(i % 3 === 0) {

        task8.push(i);
    }
}
console.log(task8);
// 9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
const task9num = Number(prompt('input the number:'));
const task9arr = [];

for (let i=1; i<(task9num + 1); i++) {
   if( task9num % i === 0 ) {
       task9arr.push(i);
   }
}
console.log(task9arr);
// 10. Визначити кількість його парних дільників.
// 11. Знайти суму його парних дільників.
const task10 = [];
let task11 = 0;

for (let i=0; i < task9arr.length; i++) {
    if(task9arr[i] % 2 === 0) {
        task10.push(task9arr[i]);
        task11 = task11 + task9arr[i];
    }
}
console.log(task10);
console.log(task10.length);
console.log(task11);


// 12. Надрукувати повну таблицю множення від 1 до 10.

const task12arr = [];

for (let i=1; i<11; i++) {
    for (let j = 1; j < 11; j++) {
        task12arr.push(`${i} * ${j} = ${j * i}`);
    }
}
console.log(task12arr)