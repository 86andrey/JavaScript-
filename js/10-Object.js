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