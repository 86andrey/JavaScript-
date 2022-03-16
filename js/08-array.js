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
// const loginToFind = 'yk8y21';
// let message = '';
// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];
//     if (login === loginToFind) {
//         message = `Пользователь ${loginToFind} найден`;
//         break; - полностью прерывает цикл !
//     } 
//         message = `Пользователь ${loginToFind} не найден`;
//     } 
//     console.log(message);
// ________________________________
// - вариант с помощью includes()
// console.log(logins.includes('yk8y21'));
// console.log(message); 
// _______________________________
// - вариант с тернарным оператором самый лучший !!!
// const message = logins.includes(loginToFind) ? `Пользователь ${loginToFind} найден` : `Пользователь ${loginToFind} не найден`;
// console.log(message);

// ___________________________________________________
// * Напиши скрипт поиска логина
// const numbers = [1,2,3,4,5,6];
// numbers.unshift(6);
// console.table(numbers);
