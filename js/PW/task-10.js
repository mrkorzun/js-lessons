// ==== TASK 1 ====
// Додати поле тільки якщо є ключ

// Створи новий масив:

// якщо є age → додати isAdult: true
// якщо нема → не додавати поле
// TODO
// перевір "age" in user
// створити новий об’єкт через spread
// додати поле умовно
/*
const users = [
  { name: 'Anna', age: 20 },
  { name: 'Ivan' },
  { name: 'Olga', age: 25 },
  { name: 'Nina', age: 15 },
];

const newUsers = [];

for (const user of users) {
  if ('age' in user) {
    if (user.age >= 18) {
      newUsers.push({ ...user, isAdult: true });
    } else {
      newUsers.push({ ...user, isAdult: false });
    }
  } else {
    newUsers.push({ ...user });
  }
}
console.table(newUsers);
*/

// ==== TASK 2 ====
// Кошик: додати товар, порахувати суму, знайти товар
// Потрібно додати в об’єкт cart методи:
// TODO
// усюди використовуй this.items
// у getTotalPrice() перебери масив і склади підсумок
// у findItem() перебери масив і знайди товар по name
// у addItem() додай новий об’єкт у масив

// const cart = {
//   owner: 'Anna',
//   items: [
//     { name: 'phone', price: 12000, quantity: 1 },
//     { name: 'case', price: 500, quantity: 2 },
//   ],
// };

// getItems(); // має повертати масив товарів
// addItem(product); // має додавати новий товар у items
// getTotalPrice(); // має повертати загальну суму з урахуванням price * quantity
// findItem(productName); // має повертати об’єкт товару з таким ім’ям або null, якщо товар не знайдено

// // Перевірка
// console.log(cart.getItems());
// cart.addItem({ name: 'charger', price: 800, quantity: 1 });
// console.log(cart.getItems());
// console.log(cart.getTotalPrice());
// console.log(cart.findItem('phone'));
// console.log(cart.findItem('tablet'));
