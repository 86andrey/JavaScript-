// *
// * Цикл for
// *
// for (let i = 0; i <= 50; i += 5) {
//     console.log(i);
// }

// for (let i = 100; i >= 0; i -= 50) {
//     console.log(i);
// }
// console.log(`qwwef`);

// *__________________________________________________
// * Напиши скрипт который подсчитывает общую сумму зарплат работников.
// * Кол-во работников храниться в переменной employees.
// * Зарплата каждого работника это случайное число от 500 до 5000
// * Записать сумму в переменную totalSalary и вывести в консоль.
// Описательная часть: 
// - сделать переменные;
// - перебрать работников в цикле;
// - сгенерить случайную зарплату;
// - прибавить к тоталу;
// - вывести тотал.

// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 4;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1) {
//     const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//     console.log(`ЗП работника номер ${i} - ${salary}`);
//     totalSalary += salary;
// }
// console.log(`totalSalary :`, totalSalary);