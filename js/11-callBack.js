// # Модуль 4. Занятие 7. Коллбеки. Стрелочные функции. forEach

// ## Example 1 - Коллбек функции

// Напишите следующие функции:

// - `createProduct(obj, callback)` - принимает объект товара без id, а также
//   колбек. Функция создаёт обьект товара, добавляя ему уникальный идентификатор в
//   свойство `id` и вызывает колбек передавая ему созданный обьект.
// - `logProduct(product)` - коллбек принимающий обьект продукта и логирующий его в
//   консоль
// - `logTotalPrice(product)` - коллбек принимающий обьект продукта и логирующий
//   общую стоимость товара в консоль

// ```js
// // Решение
// function createProduct(partialProduct, callback) {
//   const product = { id: Date.now(), ...partialProduct };
//   callback(product);
// }

// function logProduct(product) {
//   console.log(product);
// }

// function logTotalPrice(product) {
//   console.log(product.price * product.quantity);
// }

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);
// ```

// ## Example 2 - Коллбек функции

// Добавьте объекту `account` методы `withdraw(amount, onSuccess, onError)` и
// `deposit(amount, onSuccess, onError)`, где первый параметр это сумма операции, а
// второй и третий - колбеки.

// Метод `withdraw` вызывает onError если amount больше TRANSACTION_LIMIT или
// this.balance, и onSuccess в противном случае.

// Метод `deposit` вызывает onError если amount больше TRANSACTION_LIMIT или меньше
// либо равен нулю, и onSuccess в противном случае.

// ```js
// // Решение
// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 400,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount > this.balance) {
//       onError(`Amount can't exceed account balance of ${this.balance} credits`);
//     } else {
//       this.balance -= amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount <= 0) {
//       onError(`Amount must be more than 0 credits`);
//     } else {
//       this.balance += amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
// };

// function handleSuccess(message) {
//   console.log(`✅ Success! ${message}`);
// }
// function handleError(message) {
//   console.log(`❌ Error! ${message}`);
// }

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);
// ```

// ## Example 3 - Коллбек функции

// Напишите функцию `each(array, callback)`, которая первым параметром ожидает
// массив, а вторым - функцию, которая применится к каждому элементу массива.
// Функция each должна вернуть новый массив, элементами которого будут результаты
// вызова коллбека.

// ```js
// // Решение
// function each(array, callback) {
//   const newArr = [];
//   for (const element of array) {
//     newArr.push(callback(element));
//   }
//   return newArr;
// }

// console.log(
//   each([64, 49, 36, 25, 16], value => value * 2));

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   }),
// );
// console.log(
//   each([64, 49, 36, 25, 16], value => Math.sqrt(value)));

// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   }),
// );
// ```

// ## Example 4 - Стрелочные функции

// Выполните рефакторинг кода используя стрелочные функции.

// ```js
// function createProduct(partialProduct, callback) {
//   const product = { id: Date.now(), ...partialProduct };
//   callback(product);
// }

// function logProduct(product) {
//   console.log(product);
// }

// function logTotalPrice(product) {
//   console.log(product.price * product.quantity);
// }

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);
// ```

// ## Example 5 - Стрелочные функции

// Выполните рефакторинг кода используя стрелочные функции.

// ```js
// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 400,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount > this.balance) {
//       onError(`Amount can't exceed account balance of ${this.balance} credits`);
//     } else {
//       this.balance -= amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount <= 0) {
//       onError(`Amount must be more than 0 credits`);
//     } else {
//       this.balance += amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
// };

// function handleSuccess(message) {
//   console.log(`✅ Success! ${message}`);
// }
// function handleError(message) {
//   console.log(`❌ Error! ${message}`);
// }

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);
// ```

// ## Example 6 - Инлайн стрелочные функции

// Выполните рефакторинг кода используя стрелочные функции.

// ```js
// function each(array, callback) {
//   const newArr = [];
//   for (const el of array) {
//     newArr.push(callback(el));
//   }
//   return newArr;
// }

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   }),
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   }),
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   }),
// );
// ```

// ## Example 7 - Метод forEach

// Выполните рефакторинг кода используя метод `forEach` и стрелочные функции.

// ```js
// function logItems(items) {
//   console.log(items);
//   for (let i = 0; i < items.length; i += 1) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// }
// Метод forEach
// function logItems(items) {
//   items.forEach((item, index) => console.log(`${index + 1} - ${item}`))
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
// ```

// ## Example 8 - Метод forEach

// Выполните рефакторинг кода используя метод `forEach` и стрелочные функции.

// ```js
// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }
// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');
//   nameList.forEach((item, index) => console.log(`${item}:${phoneList[index]}`))
// }
// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });
// ```

// ## Example 9 - Метод forEach

// Выполните рефакторинг кода используя метод `forEach` и стрелочные функции.

// // ```js
// function calсulateAverage(...args) {
//   let total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total / args.length;
// }
// function calсulateAverage(...args) {
//   let total = 0;
//   args.forEach(arg => total += arg);
//   return total / args.length;
// }


// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2
// ```



// function greet(name) {
//     console.log(`Добро пожаловать ${name}!`);
// }
// function register(name, callback) {
//     console.log(`регистрируем гостя ${name}`);
//     callback(name);
// }
// register("Андрей", greet);

// ____________________________________________________

// Отложенный вызов: регистрация событий

// 1. получаем ссылку на кнопку
// const buttonRef = document.querySelector('.js-button');

// const handleBtnClick = function() {
//   console.log('Клик по кнопке' + Date.now());
// }
// 2. Добавить слушателя события (укажи событие и укажи ф-цию)
// Это единственный способ зарегистрировать выполнение какого то кода по событию
// buttonRef.addEventListener('click', handleBtnClick);

// ____________________________________________________

// Приватные данные и функции - скрытие реализации, интерфейс
// const myLibfac = function() {

//   let secretPassword = 100;

//   const add = (num) => secretPassword += num;
//   const getValue = () => secretPassword;

//   return {
//     add,
//     getValue,
//   };
// };


// const myLib = myLibfac();

// console.log(myLib.add(15));



// ____________________________________________________
// Инлайн колбэк !!!
// function registerGuest(name, callback) {
//     console.log(`Регистрируем гостя ${name}.`);
//     callback(name);
//   }
//   name = "Andrey";
//   registerGuest("Манго", function greet(name) {
//     console.log(`Добро пожаловать ${name}.`);
//   });
//   registerGuest("Поли", function notify(name) {
//     console.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);
//   });
// _____________________________________________________________
// !!! Обработка заказа пиццы !!!
// Если в свойстве pizzas нет пиццы pizzaName, метод order должен возвращать результат вызова колбэка onError, передавая ему аргументом строку "There is no pizza with a name <имя пиццы> in the assortment."
// Если в свойстве pizzas есть пицца pizzaName, метод order должен возвращать результат вызова колбэка onSuccess, передавая ему аргументом имя заказанной пиццы.

// const pizzaPalace = {
//     pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//     order(pizzaName, onSuccess, onError) {
//       for (const item of this.pizzas) {
          
//       if (item === pizzaName) {
//       return onSuccess(pizzaName);
//     }
//     } return onError(pizzaName)
//   }
// }
  
//   function makePizza(pizzaName) {
//     return `Your order is accepted. Cooking pizza ${pizzaName}.`;
//   }
  
//   function onOrderError(pizzaName) {
//     return `Error! There is no pizza with a name ${pizzaName} in the assortment.`;
//   }
  
//   // Method calls with callbacks
//   console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
//   console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
//   console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
//   console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));

// const changeEven = (numbers, value) => {
//     const newArray = [];
//    numbers.forEach(element => {
//         if (element % 2 === 0) {
//         newArray.push(element + value);
//       }
//     });
//     return newArray;
//   }
//   console.log(changeEven([1, 2, 3, 4, 5], 10));
//   console.log(changeEven([17, 24, 68, 31, 42], 100));
  
// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line
// const average = players.map(player => player.playtime / player.gamesPlayed);
// const averagePlay = average.reduce((previousValue, player) => {
//   return previousValue + player;
// },0);
// console.log(averagePlay);


// const totalAveragePlaytimePerGame = averagePlay.reduce((previousValue, number) => {
//   return previousValue + number;
// });

// const getTotalBalanceByGender = (users, gender) => {
//   const total = [...users]
//   .filter(course => course.gender === gender)
//   .map(student => student.balance)
//   .reduce((previousValue, number) => {
//         return previousValue + number;
// });
// return total;
// };
// // Change code above this line
// console.log(getTotalBalanceByGender([
//  {
//    name: "Moore Hensley",
//    email: "moorehensley@indexia.com",
//    eyeColor: "blue",
//    friends: ["Sharron Pace"],
//    isActive: false,
//    balance: 2811,
//    gender: "male"
//  },
//  {
//    name: "Sharlene Bush",
//    email: "sharlenebush@tubesys.com",
//    eyeColor: "blue",
//    friends: ["Briana Decker", "Sharron Pace"],
//    isActive: true,
//    balance: 3821,
//    gender: "female"
//  },
//  {
//    name: "Ross Vazquez",
//    email: "rossvazquez@xinware.com",
//    eyeColor: "green",
//    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//    isActive: false,
//    balance: 3793,
//    gender: "male"
//  },
//  {
//    name: "Elma Head",
//    email: "elmahead@omatom.com",
//    eyeColor: "green",
//    friends: ["Goldie Gentry", "Aisha Tran"],
//    isActive: true,
//    balance: 2278,
//    gender: "female"
//  },
//  {
//    name: "Carey Barr",
//    email: "careybarr@nurali.com",
//    eyeColor: "blue",
//    friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//    isActive: true,
//    balance: 3951,
//    gender: "male"
//  },
//  {
//    name: "Blackburn Dotson",
//    email: "blackburndotson@furnigeer.com",
//    eyeColor: "brown",
//    friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//    isActive: false,
//    balance: 1498,
//    gender: "male"
//  },
//  {
//    name: "Sheree Anthony",
//    email: "shereeanthony@kog.com",
//    eyeColor: "brown",
//    friends: ["Goldie Gentry", "Briana Decker"],
//    isActive: true,
//    balance: 2764,
//    gender: "female"
//  }
// ], "female"))

// ________________________________________
// const filter = function (array, test) {
//   const filteredArray = [];
//   for (const el of array) {
//     const passed = test(el);
//       if (passed) {
//         filteredArray.push(el);
//       }
//   } return filteredArray;
// };

// const fruits = [
//   {name: 'ap', quantity: 200, isFresh: true},
//   {name: 'rt', quantity: 150, isFresh: false},
//   {name: 'et', quantity: 100, isFresh: true},
// ];

// console.log(filter(fruits, fruit => fruit.quantity > 120));

