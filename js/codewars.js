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

const pre = [1, -4, 7, 12];
console.log(pre.filter(el => el >= 0).reduce((total, el) => total + el, 0));
