// function greet(name) {
//     console.log(`Добро пожаловать ${name}!`);   
// }
// function register(name, callback) {
//     console.log(`регистрируем гостя ${name}`);
//     callback(name);
// }
// register("Андрей", greet);

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

const getTotalBalanceByGender = (users, gender) => {
  const total = [...users]
  .filter(course => course.gender === gender)
  .map(student => student.balance)
  .reduce((previousValue, number) => {
        return previousValue + number;
});
return total;
};
// Change code above this line
console.log(getTotalBalanceByGender([
 {
   name: "Moore Hensley",
   email: "moorehensley@indexia.com",
   eyeColor: "blue",
   friends: ["Sharron Pace"],
   isActive: false,
   balance: 2811,
   gender: "male"
 },
 {
   name: "Sharlene Bush",
   email: "sharlenebush@tubesys.com",
   eyeColor: "blue",
   friends: ["Briana Decker", "Sharron Pace"],
   isActive: true,
   balance: 3821,
   gender: "female"
 },
 {
   name: "Ross Vazquez",
   email: "rossvazquez@xinware.com",
   eyeColor: "green",
   friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
   isActive: false,
   balance: 3793,
   gender: "male"
 },
 {
   name: "Elma Head",
   email: "elmahead@omatom.com",
   eyeColor: "green",
   friends: ["Goldie Gentry", "Aisha Tran"],
   isActive: true,
   balance: 2278,
   gender: "female"
 },
 {
   name: "Carey Barr",
   email: "careybarr@nurali.com",
   eyeColor: "blue",
   friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
   isActive: true,
   balance: 3951,
   gender: "male"
 },
 {
   name: "Blackburn Dotson",
   email: "blackburndotson@furnigeer.com",
   eyeColor: "brown",
   friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
   isActive: false,
   balance: 1498,
   gender: "male"
 },
 {
   name: "Sheree Anthony",
   email: "shereeanthony@kog.com",
   eyeColor: "brown",
   friends: ["Goldie Gentry", "Briana Decker"],
   isActive: true,
   balance: 2764,
   gender: "female"
 }
], "female"))