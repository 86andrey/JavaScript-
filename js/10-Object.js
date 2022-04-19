// const playlist = {
//     ret: 'мой супер плейлист',
//     rating: 2,
//     tracks: ['Track-1','Track-2','Track-3'],
//     trackCount: 4,
//     getName: function () {
// console.log('you are president?');
//     },
//     addTrack(track) {
//         this.tracks.push(track);
//     },

// };
// playlist.getName();
// playlist.addTrack('new-classic');
// console.log(playlist);
// ____________________________________________________
// const x = {};
// console.log({});
// const fn = function (myObject) {
//     console.log(myObject);
// }
// fn({a: 4, b: 8});
// ____________________________________________________
// const sd = function () {
//     return {a: 5};
// }
// ____________________________________________________
// const friends = [
//     {name: 'Mango', online: false},
//     {name: 'kiwi', online: false},
//     {name: 'poly', online: true},
//     {name: 'ajax', online: false},
// ];
// console.log(Object.keys(friends).length);
// for (const friend of friends) {
//     console.log(friend.name);   
// }
// ____________________________________________________
// const getOnlineFriends = function (allFriends) {
//     const friendOnline = [];
// for (const friend of allFriends) {
//     if (friend.online) {
//         friendOnline.push(friend);
//     }  
// } return friendOnline;
// }
// console.log(getOnlineFriends(friends));
// ____________________________________________________
// const cart = {
//     items: [],
//     getItems() {},
//     add(product) {},
//     remove(productName) {},
//     clear() {},
//     countTotalPrice () {},
//     increaseQuantity(productName) {},
//     decreaseQuantity(productName) {},
// };
// card.add({name: 'яблоко', price: 50});
// card.add({name: 'яблоко', price: 50});
// card.add({name: 'яблоко', price: 50});
// card.add({name: 'яблоко', price: 50});
// ____________________________________________________
// function countProps(object) {
//     // Change code below this line
//     let propCount = 0;
//   const keys = Object.keys(object);
//     for (const key of keys) {
//       if (object.hasOwnProperty(key)) {
//         propCount = Object.values(object).length;
//       };
//     };
//     return propCount;
//     // Change code above this line
//   };
//   console.log(countProps(object));

// __________________________________________________________
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// // function getProductPrice(tron) { 
//   // const total = []; 
// const keys = Object.keys(products);
// for (const key of keys) {
//   // Ключ
//   console.log(key);
//   // Значение свойства
//   console.log(products[key]);
//   if(keys.includes["name"]) {
//     console.log(4444);
//   }
// }console.log(`нет такого`);
// console.log(getProductPrice("name"));
// console.log(products);

// ____________________________________________________
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// let allProp = [];
// function getAllPropValues(propName) {
// for (const key of products) {
//   // console.log(key);
//   if (key.name === propName) {
//   return products[key]};
// }; 
// return 2;
// }
// console.log(getAllPropValues("Radar"));

// ____________________________________________________
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   // { name: "Droid", price: 400, quantity: 7 },
//   // { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) { 
//   const total = [];
//   for (const product of products) {
//                     console.log(product);
//   const keys = Object.keys(product); 
//                     console.log(keys);
//     if (keys.includes(propName)) {
//       total.push(product[propName])
//   };
//   }; return total;
//   }
// console.log(getAllPropValues("name"));

// ____________________________________________________
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
// for (const product of products) {
//                         console.log(product);
//   const findName = Object.values(product);
//                   console.log(findName);
//   if (findName.includes((productName))){
//              return product.price * product.quantity;
//   };
// };
// return 0;
// };
// console.log(calculateTotalPrice("Droid"));

// ____________________________________________________
// const playlist = {
//       ret: 'мой супер плейлист',
//       rating: 2,
//       tracks: ['Track-1','Track-2','Track-3'],
//       trackCount: 4,
//       getName: function () {
//   console.log('you are president?');
//       },
//       addTrack(track) {
//           this.tracks.push(track);
//       },
  
//   };
//   const {ret, rating, tracks} = playlist;

//   console.log(ret);

// ____________________________________________________
// function add(a, ...args) {
//   // console.log(a,args);
//   let total = [];
//   for(let i = 0; i < args.length; i +=1) {
//     console.log(a[i]); 
//     console.log(args[i]); 
  
//    if (a.includes(args[i])) {
//     total.push(args[i]);
//    };
//   } return total;
//   };
// console.log(add([1, 2, 3, 4, 5], 1, 8, 2, 7));

// ____________________________________________________
// function findMatches(a,s,d) {
//   console.log(findMatches);
//   // const matches = [];
//   // return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));

// ____________________________________________________
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   addPotion(newPotion) {
//     for (const potion of this.potions){
//       console.log(potion);
//     if (potion === { name: "Dragon breath", price: 700 }) {
//       return `Error! Potion ${newPotion} is already in your inventory!`;
//     } this.potions.push(newPotion);
//     return this;
//   }
//   },
  // addPotion(newPotion) {
  //   const potionsNames = [];
  //   for (const potion of this.potions) {
  //     potionsNames.push(potion.name);
  //   }
  //    console.log(potionsNames);
  //   if (potionsNames.includes(newPotion.name)) {
  //     return `Error! Potion ${newPotion.name} is already in your inventory!`;
  //   } else {this.potions.push(newPotion)};
  // },
// };

// console.log(atTheOldToad.addPotion({ name: "asfaf breath", price: 700 }));
// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));

// ___________________________________________________________________________________
// Example 3 - Массив обьектов
// ___________________________________
// Напишите функцию, которая принимает массив обьектов
// и строку с названием камня. Ф-ция считает и возврращает общую стоимость
// камней с таким именем, ценой и количеством из обьекта 
// const stones = [
//   { name: 'Изумруд', price: 1300, quantity: 4 },
//   { name: 'Бриллиант', price: 2700, quantity: 3 },
//   { name: 'Сапфир', price: 400, quantity: 7 },
//   { name: 'Щебень', price: 200, quantity: 2 },  
// ];
// function calcTotalPrice(stones, stoneName) {
//   for (let stone of stones) {
//       if (stone.name.includes(stoneName)) {
//         return stone.price * stone.quantity;
//       };
//   };
//   return 0;
// };
// console.log(calcTotalPrice(stones, 'Щебень')); // 400




// ___________________________________________________________________________________
// ## Example 4 - Комплексные задачи

// Напиши скрипт управления личным кабинетом интернет банка. Есть объект `account`
// в котором необходимо реализовать методы для работы с балансом и историей
// транзакций.

// ```js
// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */


// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

// const account = {
                // Текущий баланс счета
  // balance: 0,

                // История транзакций
  // transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  // createTransaction(amount, type) {
    // 135
    // return {
  //     amount, // amount : 135
  //     type, // type: 'deposit
  //     id: this.transactions.length,
  //   };
  // },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  // deposit(amount) {
  //   // let amount = 135
  //   this.balance += amount; // this.balance + 135
  //   this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
  // },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
//   withdraw(amount) {
//     if (amount > this.balance) {
//       return "У Вас недостатньо коштів";
//     }
//     this.balance -= amount;
//     const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
//     this.transactions.push(transaction);
//   },

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {
//     // let this = account
//     return this.balance;
//   },

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {
//     for (let transaction of this.transactions) {
//       if (transaction.id === id) {
//         return transaction;
//       }
//     }
//     return "Такої операції не існує";
//   },

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(variant) {
//     let total = 0;
//     for (let transaction of this.transactions) {
//       if (transaction.type === variant) {
//         total += transaction.amount;
//       }
//     } return total;
//   },
// };
// ```

// console.log(account.getBalance());
// account.deposit(135);
// account.withdraw(50);
// account.withdraw(60);
// account.withdraw(10);
// account.deposit(200);
// account.deposit(2000);
// account.withdraw(500);
// console.log(account.getTransactionDetails(1));
// console.log(account);
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));
// console.log(account.transactions);
// transaction['type'] === transaction.type // 'deposit' 'withdraw'

