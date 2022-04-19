
//   bind() и методы объекта

// При передаче методов объекта как колбэк-функций, контекст не сохраняется.
// Колбэк это ссылка на метод, которая присваивается как значение параметра,
//  вызываемого без объекта.
// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() это вызов метода getFullName без объекта
//   console.log(`Обрабатываем заявку от ${callback()}.`);
// }
// makeMessage(customer.getFullName.bind(customer));



// ___________________________________________________________________
// Это Модель или логика
// const counter = {
//     value: 0,
//     increment() {
//         console.log(`increment -> this`, this);
//         this.value += 1;
//     },
//     decrement() {
//         console.log(`increment -> this`, this);
//         this.value -= 1;
//     },
// };
// _____________________________________________________
// дальше - это работа с интерфейсом

// const decrementBtn = document.querySelector('.js-decrement');
// const incrementBtn = document.querySelector('.js-increment');
// const valueEL = document.querySelector('.js-value');

// console.log(decrementBtn);
// console.log(incrementBtn);

// decrementBtn.addEventListener('click', function () {
//     counter.decrement();
//     valueEL.textContent = counter.value;
// });
// incrementBtn.addEventListener('click', function () {
//     counter.increment();
//     valueEL.textContent = counter.value;
// });