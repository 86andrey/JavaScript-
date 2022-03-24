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

// function calculateTotalPrice(order) {
//     let total = 0;
//   for (const val of order) {
//     total += val;
//   }
//     return total;
//   }
//   calculateTotalPrice([12, 85, 37, 4]);
//   calculateTotalPrice([164, 48, 291]);
//   calculateTotalPrice([412, 371, 94, 63, 176]);
//   calculateTotalPrice()
  // console.log(calculateTotalPrice([12, 85, 37, 4]));
 
  // function createArrayOfNumbers(min, max) {
  //   const numbers = [];
    // Change code below this line
  // for (let i = min; i <= max; i += 1) {
  //     numbers.push(i);
   
  // }
    // Change code above this line
  //  return numbers;
  // }
  // console.log(createArrayOfNumbers(1, 3));

//   function filterArray(numbers, value) {
//     let num = [];
//    // Change code below this line
//  for (let i of numbers) {
//    if (i > value) {
//      num.push(i);
//    }
//  }
//    // Change code above this line
//   return num;
//  }
//  console.log(filterArray([12, 24, 8, 41, 76], 20));