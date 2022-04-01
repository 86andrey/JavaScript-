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

// const x = {};
// console.log({});
// const fn = function (myObject) {
//     console.log(myObject);
// }
// fn({a: 4, b: 8});

// const sd = function () {
//     return {a: 5};
// }

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

// const getOnlineFriends = function (allFriends) {
//     const friendOnline = [];
// for (const friend of allFriends) {
//     if (friend.online) {
//         friendOnline.push(friend);
//     }  
// } return friendOnline;
// }
// console.log(getOnlineFriends(friends));

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
// __________________________________________________________




// console.log(getProductPrice("name"));
// console.log(products);

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
  
// }; return 2;
// }
// console.log(getAllPropValues("Radar"));


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

//   // Пиши код выше этой строки
// };
// console.log(calculateTotalPrice("Droid"));

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

// function findMatches(a,s,d) {
//   console.log(findMatches);
//   // const matches = [];
//   // return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
const atTheOldToad = {
  items: [
    { name: "Speed", price: 460 },
    { name: "Dragon", price: 780 },
    { name: "Stone", price: 520 },
  ],
updatePotionName(oldName, newName) {
const {items} = this;
  for (let i = 0; i < items.length; i += 1) {
    const {name} = items[i];
    if (oldName === name) {
        return `Potion ${oldName} is not in inventory!`;
    } items.splice(i, 1);
  }
},
};
console.log(atTheOldToad.updatePotionName("Stone", "Invulnerability potion"));