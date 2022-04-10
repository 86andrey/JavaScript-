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
// * Напиши функцию поиска самого маленького числа в массиве
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
// console.log(findSmallestNumber(numbers));

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
// ___________________________________________________
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
  // Ключ
  // console.log(key);
  // Значение свойства с таким ключом
//   console.log(book[key]);
//  }
// ___________________________________________________
//  const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смешного человека",
//     author: "Федор Достоевский",
//     rating: 7.75,
//   },
// ];
//  for (const  book of books) {
  //  console.log(book);
  //  console.log(book.title);
  //  console.log(book.author);
  //  console.log(book.rating);
//  }
// _____________________________________________________
// Функция для расчета Площади треугольника
// function getRectArea (dimension) {
//   const numbers = dimension.split(" ");
//   const area = ( numbers[0] * numbers[1]) / 2;
//   return area;
// }
// console.log(getRectArea('2 8'));

// пользователь вводит данные с расчетом если не то введет !!! 
// Нужно учитывать критерии отрицательных сценариев !!! 
// function getRectArea (width, hight) {
//   if (isNaN (width) || isNaN (hight)) {
//     alert("Введите корректное значение");
//     return;
// } 
//   if (width === null || hight === null) {
//     alert("Вы не завершили операцию ввода");
//     return;
// }
//   return (width * hight) / 2;
// }
// const width = prompt("Enter width");
// const hight = prompt("Enter hight");
// console.log(getRectArea(width, hight));

// _____________________________________________________
// Функция для расчета среднего значения
// function calAverage(...expression) {
// const sumIndex = expression.length;
// let total = 0;
//   for (let i of expression){
//     total += i;
//   } 
//   return total / sumIndex;
// }
// console.log(calAverage(2, 4, 2, 2));

// _____________________________________________________
// Форматирование времени (таймер обратного времени)
// function formatTime(minutes) {
//   const hours = Number.parseInt(minutes / 60);
//   const min = minutes % 60;
//   const converHours = hours < 10 ? `0${hours}` : hours;
//   const converMin = min < 10 ? `0${min}` : min;
//   return `${converHours}:${converMin}`;
// }
// console.log(formatTime(450));
// console.log(formatTime(150));