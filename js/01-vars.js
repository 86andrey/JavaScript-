// let x;
// console.log('10');

// *__________________________________________________________________
// *Ввод пользователя
// *
// *методы window.confirm() и window.prompt();
// ________________________________________________________________
// const shouldRenew = confirm('хотите продлить подписку?');
// console.log(shouldRenew);

// let quantity = prompt('Введите количество товара?');
// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity);

// *__________________________________________________________________
// *Парс числа с Number.parseInt() и Number.parseFloat()
// __________________________________________________________________
// let elementWidth = '50px';
// const result = Number.parseInt(elementWidth);
// console.log(result);

// let elementHeight = '200.75px';
// const result = Number.parseFloat(elementHeight);
// console.log(result);

// *__________________________________________________________________
// * Метод число.toFixed(digits)
// *__________________________________________________________________
// let salary = 1300.16578;
// salary = Number(salary.toFixed(2));
// salary = Number(salary); для уменьшения кода можно писать только верхнюю строку
// console.log(salary);

// __________________________________________________________________
// Напиши скрипт который просит пользователя ввести число и степень, 
// возводит число в эту степень и выводит результат в консоль
// __________________________________________________________________
// 1. создать 2 переменные
// 2. введите число и степень
// 3. формула для возведения
// 4 вывести результат
// let base = prompt('введите число');
// let power = prompt('введите степень');
// const result = (base ** power);
// console.log(result);

// __________________________________________________________________
// Генерим псевдослучайные числа 
// - Math.random()  Math.random() * (max - min) + min
// -Math.round() - округлить
// __________________________________________________________________

// const max = 10;
// const min = 5;
// console.log(Math.random() * (max - min) + min);

// const max = 10;
// const min = 5;
// const result = Math.round(Math.random() * (max - min) + min);
// console.log(result);

