// * Посчитать общую сумму покупок в корзине.
//  * 1-ый вариант
// const cart = [54, 28, 105, 70, 92, 17, 120];
// let total = 0;
// for (let i = 0; i < cart.length; i += 1) {
//     total += cart[i];
// }
// console.log(total);

//  * 2-ой вариант
// const cart = [54, 28, 105, 70, 92, 17, 120];
// let total = 0;
// for (const value of cart) {
//     total += value;
// }
// console.log(total); 

// ___________________________________________________
// * Напиши скрипт который подсчитывает сумму всех четных 
// чисел в массиве.
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//         total += numbers[i];
//         continue;
//     }   
// }
// console.log(total); 

// ___________________________________________________
// * Напиши скрипт поиска логина
// - если логина нет, вывести сообщение "Пользователь [логин] не найден".
// -  если логина есть, вывести сообщение "Пользователь [логин] найден".
// - сначало через for, потом через for...of, логика break, метод includes() с тернарным оператором
// const logins = ['wfgwr4', '5689jj', 'yk8y21', 'wpk4lo'];
// let loginToFind = '5689jj';
// let message = '';
// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];
    // if (login === loginToFind) {
    //     message = `Пользователь ${loginToFind} найден`;
    //     break;
    // } 
    //     message = `Пользователь ${loginToFind} не найден`;
    // } 
    // console.log(message);
// ________________________________
// - вариант с помощью includes()
// console.log(logins.includes('yk8y21'));
// console.log(message); 
// _______________________________
// - вариант с тернарным оператором самый лучший !!!
// const message = logins.includes(loginToFind) ? `Пользователь ${loginToFind} найден` : `Пользователь ${loginToFind} не найден`;
// console.log(message);

// ___________________________________________________
// * Напиши скрипт поиска самого мальнького числа в массиве
// * при условии что числа уникальные (не повторяются)
// условие - если к первому числу ты меньше - то замени его,
//  иначе продолжай дальше
// const numbers = [51, 18, 13, 24, 7, 2, 19];
// let min = numbers[0];
// for (const number of numbers) {
//     if (number < min) {
//         min = number;
//     } 
// }
// console.log(min);

// ___________________________________________________
// * Напиши скрипт который обьединяет все элементы массива
//  в одно-строковое значение.
// - элементов может быть произвольное кол-во.
// - пусть элементы массива в строку будут разделены запятой.
// - сначало через for.
// - потом через join().
// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let newfriends = '';
// for (const frend of friends) {
//     newfriends += frend +',';
// }
// newfriends = newfriends.slice(0, -1);
// console.log(newfriends);
// - должно получиться 'Mango,Poly,Kiwi,Ajax' ;

// ___________________________________________________
// * Напиши скрипт который заменяет регистр каждого символа
// в строке на противоположный;
// например: если строка "JavaScript", то на выходе должен быть
// строка "jAVAsCRIPT".
// ** 1-ый вариант - олдскул
// const string = 'JavaScript';
// let uplit = string.split('');
// let inver = '';
// for (const lit of string) {
//     if (lit === lit.toLowerCase()) {
//         inver += lit.toUpperCase();
//     } else {inver += lit.toLowerCase();
//     }
// }
// console.log(inver);

// ** 2-ый вариант - хорош
// const string = 'JavaScript';
// let uplit = string.split('');
// let inver = '';
// for (const lit of string) {
//     inver += lit === lit.toLowerCase() ? lit.toUpperCase() : lit.toLowerCase();
// }
// console.log(inver);

// ___________________________________________________
// * Делаем slug в URL из названия статьи (например на dev.to)
// * Заголовок статьи состоит только из букв и пробелов
// -нормализуем строку
// -разбиваем по словам
// -сшиваем в строку с разделителем
// должно получиться top-10-benefist-of-react-framework
// const title = 'Top 10 benefist of react framework';
// const slug = title.toLowerCase().split(" ").join("-");
// console.log(slug);

// ___________________________________________________
// Напиши скрипт который считает сумму элементов двух массивов.
// const array1 = [5,10,15,20];
// const array2 = [10,20,30];
// const all = array1.concat(array2);
// let allNumber = 0;
// for (const num of all) {
//     allNumber += num;
// }
// console.log(allNumber);

// ___________________________________________________
// работаем с коллекцией карточек в trello
// - метод splice();
// - удалить, добавить, обновить
// const cards = ['Карточка-1','Карточка-2','Карточка-3','Карточка-4','Карточка-5'];

// _______________ * удаление (по индексу), метод indexOf()__________________________
//
// const cardToRemove =  'Карточка-3';
// const index = cards.indexOf(cardToRemove);
// cards.splice(index,1);
// console.log(cards);

// ______________* добавление (по индексу)_________________________________________
// const cardToInsert =  'Карточка-6';
// const index = 3;
// cards.splice(index,0,cardToInsert);
// console.log(cards);

// ______________* обнавление (по индексу)_________________________________________
// const cardToUpdate = 'Карточка-4';
// const index = 2;
// cards.splice(index,1,cardToUpdate);
// console.log(cards);

// task 1 
// let arr = ['Ваня','Иштван','Оля',];
// console.log(arr);
// arr[1] = 'Петя';
// console.log(arr);

// const genres = ["Jazz", "Blues"];
// genres.push("Rock n roll");
// console.log(genres);
// console.log(genres[0]);
// console.log(genres[genres.length-1]);
// console.log(genres.shift());

// ______________________________________
// Площадь треугольника
// const values = "8 11";
// const numbers = values.split(" ");
// console.log(numbers);
// const area = ( numbers[0] * numbers[1]) / 2;
// console.log(area);
// _________________________________________
// Вывести по порядку 1: яблоко и т.д.
// const fruits = ["apple", "banan", "lemon", "pea"];
// for (let i = 0; i < fruits.length; i += 1) {
//     const element = fruits[i];
//     const index = i + 1; 
//     console.log(`${index}: ${element}`);
// }
// _________________________________________
// Имя и телефонный номер
// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '8900123456,8900123455,8900123454,8900123453,8900123452,8900123451';

// const arrNames = names.split(",");
// const arrPhones = phones.split(",");

// let longestArray = arrNames.length > arrPhones.length ? arrNames : arrPhones;

// for (let i = 0; i < longestArray.length; i += 1) {
//     const name = arrNames[i] === undefined ? `No name` : arrNames[i];
//     const phone = arrPhones[i] === undefined ? `No phone` : arrPhones[i];;
//     console.log(`${name} - ${phone}`);
// };
 // _________________________________________
// Максимальное из чисел
// const numbers = [2, 17, 94, 23, 47];
// const a = Math.max(...numbers);
// console.log(a);
// _________________________________________
// 