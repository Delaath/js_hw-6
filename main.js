//? Вивести на екран всі числа від 1 до 10 за допомогою циклу while.

let numbers = 0;
while (numbers < 10) {
    numbers += 1;
    console.log('numbers :>> ', numbers);
}

//? Вивести на екран всі парні числа від 2 до 20 за допомогою циклу for. Якщо число не парне, пропустити його за допомогою continue.

let number = 20;
for (let i = 2; i <= number; i += 1) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log('парне i', i);
}

//? Вивести на екран таблицю множення числа 7 за допомогою циклу for.

for (let i = 1; i <= 10; i += 1) {
    console.log(`7 x ${i} = ${7 * i}`);
}

//? Створити масив з числами від 1 до 5. Вивести на екран кожен елемент масиву за допомогою циклу while.

let arrayNum = [1, 2, 3, 4, 5];
let i = 0;
while ( i < arrayNum.length) {
    console.log(arrayNum[i]);
    i += 1;
}

//? Створити масив із числами від 1 до 10. За допомогою циклу for пройтися по масиву та вивести на екран всі числа, крім числа 7. Якщо зустрінете число 7, закінчити виконання циклу за допомогою оператора break.

const arraysFor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let index = 0; index < arraysFor.length; index += 1) {
    const element = arraysFor[index];
    if (element === 7) {
        break;
    }
    console.log(element);
}

//? Створити скрипт, який виводить на екран всі числа, які менші за n. Якщо зустрічається число, що більше або дорівнює n, цикл повинен бути закінчений за допомогою break.

const numN = 8;
const arraysN = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (const arrayN of arraysN) {
    if (arrayN >= numN) {
        console.log('Число більше N! (8)');
        break;
    }
    console.log(arrayN);
}

//? За допомогою циклу while вивести на екран всі числа від 1 до 20, крім чисел, кратних 3. Якщо зустрінете число, кратне 3, цикл повинен продовжити виконання за допомогою оператора continue.

const arraysThree = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
for (const arrayThree of arraysThree) {
    if (arrayThree === 3) {
        console.log('Кратне 3');
        continue;
    }
    console.log('Не кратне 3 :>> ',arrayThree);
}