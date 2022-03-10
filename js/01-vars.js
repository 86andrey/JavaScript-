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

// __________________________________________________________________
// Пример выбора цвета через массив рандомно
// __________________________________________________________________
// const colors = ['tomato', 'teal', 'orange', 'deeplink'];
// const max = colors.length -1;
// const min = 0;
// const index = Math.round(Math.random() * (max - min) + min);
// const color = colors[index];
// console.log(color);
// document.body.style.backgroundColor = color;

// __________________________________________________________________
// * Задача: Напиши скрипт который выведет строку в формате:
// * "Гость x y поселяеться в z номер q" - 
// * поставив вместо x y z q - значение переменных. 
// __________________________________________________________________
// const firstName = prompt('введите имя');
// const lastName = prompt('введите фамилию');
// const room = 716;
// const type = 'VIP';
// const result = `Гость ${firstName} ${lastName} поселяеться в ${room} номер ${type}`;
// console.log(result);

// __________________________________________________________________
// * Поиск в строке с методом includes()
// __________________________________________________________________
// const blacklistedWord1 = 'спам';
// const blacklistedWord2 = 'распродажа';

// const string1 = 'Привет, я принц Абдула, это не спам, предлогаю тебе миллион!';
// const string2 = 'Самая большая РАСПРОДАЖА этой недели, не пропустите!';
// const string3 = 'Рекламная компания #fatlivematter';
// console.log(string1.includes('спам'));
