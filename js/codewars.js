// 'world'  =>  'dlrow'

// function solution(str) {
//   return str.split('').reverse().join('');
// };
// console.log(solution('world'));
// ______________________________________________________
// class User {
//   email;
//   constructor(email) {
//     this.email = email;
//   }
//   get email() {
//     return this.email;
//   }
//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
// blacklistedEmails = [];
//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };
//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }
// blacklist(email) {
//   this.blacklistedEmails.push(email);
// }
// isBlacklisted(email) {
//     if (this.blacklistedEmails.includes(email)) {
//     return true
//     }; return false
    
// }
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true
// _________________________________________________________________
// class User {
//   // Необязательное объявление публичных свойств
//   name;
//   // Обязательное объявление приватных свойств
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   getEmail() {
//     return this.#email;
//   }

//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   name: "Манго",
//   email: "mango@mail.com",
// });

// mango.changeEmail("mango@supermail.com");
// console.log(mango.getEmail());
// mango.name = "Poly";
// mango.email = "Private@mail.com";
// console.log(mango);


 
// const pre = 'This looks2 grea8t!';
// console.log(pre.split('').filter(el => el.charCodeAt() < 49 || el.charCodeAt() > 57).join(''));

// const pre = [1, -4, 7, 12];
// console.log(pre.filter(el => el >= 0).reduce((total, el) => total + el, 0));

// ___________________________________________________________________________________________________________
// Завдання до виконання мовою JavaScript
// *
// Ділан і Кейт хочуть подорожувати між кількома містами А, В, С....
// Кейт має на аркуші паперу список відстаней між цими містами.
// ls = [51, 56, 58, 59, 61].Ділан втомився їздити, і він каже Кейт,
//  що не хоче їхати більше t = 174 милі, і він відвідає лише 3 міста.
// Які відстані, а отже, які міста вони оберуть, щоб сума відстаней була
//  якомога більшою, щоб догодити Кейт та Ділану ?

// version 1
// const chooseOptimalDistance1 = (d, k, ls) => {
//   if (ls.length < k) return null;
//   if (ls.length === 3) {
//     const distance = ls.reduce((sum, item) => sum + item, 0);
//     return distance > 0 && distance <= d ? distance : null;
//   }
//   let maxDistance = 0;
//   const getDistance = (level, distance, restOfLs) => {
//     for (let i = 0; i <= restOfLs.length - level; i++) {
//       const newDistance = distance + restOfLs[i];
//       if ((level === 1)) {
//         if (newDistance <= d && newDistance > maxDistance)
//           maxDistance = newDistance;
//       } else {
//         getDistance(level - 1, newDistance, restOfLs.slice(i + 1));
//       }
//     }
//   };
//   getDistance(k, 0, ls);
//   return maxDistance > 0 ? maxDistance : null;
// };

// console.log('Version 1:');
// console.log(chooseOptimalDistance1(174, 3, [51, 56, 58, 59, 61])); //173
// console.log(chooseOptimalDistance1(163, 3, [50])); // null
// console.log(chooseOptimalDistance1(163, 3, [50, 51, 49])); // 150

// version 2
// Функція chooseOptimalDistance приймає параметри:
// t (максимальна сума відстаней, ціле число >= 0),
// k (кількість міст, які потрібно відвідати, k> = 1),
// ls (список відстаней, всі відстані є додатними або нульовими цілими числами, і цей список містить принаймні один елемент).

// const chooseOptimalDistance2 = (d, k, ls) => {
//   if (ls.length < k) return null;

//   const getMaxDist = (combs) => {
//     let maxDist = 0;
//     for (let comb of combs) {
//       const newDist = comb.reduce((sum, item) => sum + item, 0);
//       if (newDist > maxDist && newDist <= d) maxDist = newDist;
//     }
//     return maxDist > 0 ? maxDist : null;
//   };

//   if (ls.length === k) return getMaxDist([ls]);

//   const combinations = [];
//   const getComb = (level, comb, rest) => {
//     for (let i = 0; i <= rest.length - level; i++) {
//       if (level <= 1) {
//         combinations.push([...comb, rest[i]]);
//       } else {
//         getComb(level - 1, [...comb, rest[i]], rest.slice(i + 1));
//       }
//     }
//   };
//   getComb(k, [], ls);
//   return getMaxDist(combinations);
// };

// console.log(chooseOptimalDistance2(163, 3, [50, 51, 49])); // 150

// ____________________________________________________________________
// *
// Вычисление факториала
// *
// const a = n => {
//     let total = 1;
//     for (let i = 1; i <= n; i += 1) {
//         total = total * i;
//     }
//     return total;
// }
// console.log(a(5));
// ____________________________________________________________________
// *
// Вычисление суммы факториалов с шагом
// *
// function sumFactorials(start, finish, step) {
//     let sum = 0;
//     for (let i = start; i <= finish; i += step) {
//         let factorial = 1;
//         console.log(`this first iteration ${i}`);
//         for (let j = 2; j <= i; j += 1) {
//             factorial *= j;
//             console.log(`second iteration ${j}`);
//         }
//         sum = factorial;
//     }
//     return sum;
// }
// console.log(sumFactorials(1, 5, 3));
// ____________________________________________________________________
// *
// Вычисление факториала через рекурсию
// *
// function factorial(x) {
//     if (x < 0) return `Такого значения нет`;
//     if (x === 0) return 1;
//     return x * factorial(x-1);
// }
// console.log(factorial(10));

// ____________________________________________________________________
// *

// const form = document.querySelector(".form");

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const {elements: { login, password }} = event.currentTarget;

//   if (login.value === "" || password.value === "") {
//     return console.log("Please fill in all the fields!");
//   }

//   console.log(`Login: ${login.value}, Password: ${password.value}`);
//   event.currentTarget.reset();
// }
const button = document.querySelector(".btn");

const handleClick = (event) => {
  console.log("event: ", event);
  console.log("event type: ", event.type);
  console.log("currentTarget: ", event.currentTarget);
};

button.addEventListener("click", handleClick);