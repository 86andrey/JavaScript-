// ___________________________________________________
// * Напиши функцию поиска логина
// - если логина нет, вывести сообщение "Пользователь [логин] не найден".
// -  если логина есть, вывести сообщение "Пользователь [логин] найден".
// - сначало через for, потом через for...of, логика break, метод includes() с тернарным оператором
// const logins = ['wfgwr4', '5689jj', 'yk8y21', 'wpk4lo'];

// const findToLogin = function (allLogins, loginToFind) {
//     return allLogins.includes(loginToFind) ? 'Пользователь ${loginToFind} найден.' : 'Пользователь ${loginToFind} не найден.'
// };
// console.log(findToLogin(logins, '5689jj'));

// ___________________________________________________
// * Напиши функцию поиска самого мальнького числа в массиве
// * при условии что числа уникальные (не повторяются)
// условие - если к первому числу ты меньше - то замени его,
//  иначе продолжай дальше
// const numbers = [51, 18, 13, 24, 7, 2, 19];
// const findSmallestNumber = function (numbers) {
//     let min = numbers[0];
//     for (const number of numbers) {
//         if (number < min) {
//             min = number;
//         } 
// }
// return min;
// }
// console.log(findSmallestNumber([51, 18, 13, 24, -7, 2, 19]));
