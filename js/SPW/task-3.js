// ==== TASK 1 ==== Sat 18 Apr

// const students = [
//   { name: 'Anna', grade: 85 },
//   { name: 'Max', grade: 42 },
//   { name: 'Sofia', grade: 91 },
//   { name: 'Ivan', grade: 58 },
//   { name: 'Olena', grade: 76 },
// ];

// Your task — write 3 things:

//   1. Filter only students who passed (grade >= 60)
//   2. Get an array of just their names (of passed students)
//   3. Calculate the average grade of ALL students

//   Rules:
//   - Use filter, map, reduce
//   - No Google, no notes — try from memory
//   - It's okay to be wrong, just try!

// const passedStudents = students
//   .filter(student => student.grade >= 60)
//   .map(student => student.name);

// console.log(passedStudents);

// const averageGrade =
//   students.reduce((acc, student) => acc + student.grade, 0) / students.length;
// console.log(averageGrade);

// ==== TASK 2 ====
// const products = [
//   { name: 'Laptop', price: 1200, inStock: true },
//   { name: 'Phone', price: 800, inStock: false },
//   { name: 'Tablet', price: 450, inStock: true },
//   { name: 'Monitor', price: 350, inStock: true },
//   { name: 'Keyboard', price: 80, inStock: false },
// ];

// //   Tasks:
// //   1. Get names of all products that are in stock
// //   2. Find the total price of in-stock products only

// const totalPrice = products
//   .filter(product => product.inStock)
//   .reduce((acc, product) => acc + product.price, 0);
// //   .map(product => product.name);

// const allNamesProducts = products
//   .filter(product => product.inStock)
//   .map(product => product.name);
// console.log(
//   'Avalible products =',
//   allNamesProducts,
//   'Total price =',
//   totalPrice
// );

// ==== TASK 3 ====
// const orders = [
//   { id: 1, customer: 'Anna', amount: 120, status: 'completed' },
//   { id: 2, customer: 'Max', amount: 45, status: 'pending' },
//   { id: 3, customer: 'Sofia', amount: 200, status: 'completed' },
//   { id: 4, customer: 'Ivan', amount: 89, status: 'cancelled' },
//   { id: 5, customer: 'Olena', amount: 340, status: 'completed' },
//   { id: 6, customer: 'Dmytro', amount: 15, status: 'pending' },
// ];

// //   Tasks:
// //   1. Get names of customers with completed orders
// //   2. Get the total revenue from completed orders only
// //   3. Find the average order amount across all orders

// const completedCustomerOrders = orders
//   .filter(order => order.status == 'completed')
//   .map(order => order.customer);
// console.log(completedCustomerOrders);

// const totalRevenue = orders
//   .filter(order => order.status === 'completed')
//   .reduce((acc, order) => acc + order.amount, 0);
// console.log(totalRevenue);

// const averageOrders =
//   orders.reduce((acc, order) => acc + order.amount, 0) / orders.length;
// console.log(averageOrders);

// ==== TASK 4 ====

// Напиши скрипт, який змінює колір фону сторінки при кліку на кнопку та виводить значення кольору в текстовий спан.

// Твої кроки:

// Використовуй готову функцію getRandomHexColor() (код нижче) для генерації випадкового кольору.

// Напиши обробник події кліку на кнопку .change-color.

// При кожному кліку:

// Змінюй колір фону елемента <body> через style.backgroundColor.

// Виводь значення цього кольору текстом у span.color.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// const refs = {
//   btnColor: document.querySelector('.change-color'),
//   spanText: document.querySelector('.color'),
// };

// // console.log(refs);
// const onClickBtnColorChange = () => {
//   const getColor = (refs.spanText.textContent = getRandomHexColor());
//   document.body.style.backgroundColor = getColor;
// };

// refs.btnColor.addEventListener('click', onClickBtnColorChange);
// // console.log(refs.btnColor);

// ==== TASK 5 ==== Слідування за курсором
// Тобі потрібно створити магічний "ліхтарик",
// який буде слідувати за курсором миші по екрану.

/* <div class="magic-ball"></div> */

// JS: * Повісь слухач події mousemove на об'єкт window.
// У функції-обробнику отримуй координати курсора з об'єкта події (clientX та clientY).
// Передавай ці координати властивостям left та top нашої кульки.
// 💡 Підказка:
// Коли ти будеш задавати координати в стилі, пам'ятай, що це рядки з одиницями виміру. Тобто треба додавати 'px':
// element.style.left = event.clientX + 'px';

// Бонусний рівень (якщо захочеш):
// Зроби так, щоб кулька була рівно по центру курсора, а не чіплялася за нього своїм лівим верхнім кутом. Для цього треба відняти половину її ширини/висоти від координат.

// const refs = {
//   magicBall: document.querySelector('.magic-ball'),
// };

// const onMouseMove = event => {
//   const x = event.clientX - 30;
//   const y = event.clientY - 30;

//   console.log(`X: ${x}, Y: ${y}`);

//   //   refs.magicBall.style.left = `${x}px`;
//   //   refs.magicBall.style.top = `${y}px`;

//   refs.magicBall.style.transform = `translate(${x}px, ${y}px)`;
// };

// window.addEventListener('mousemove', onMouseMove);
