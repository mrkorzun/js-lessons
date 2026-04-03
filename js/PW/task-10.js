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
// Додати метод getAddress(), який повертає:
// "Kyiv, Ukraine"
/*
const user = {
  name: 'Anna',
  address: {
    city: 'Kyiv',
    country: 'Ukraine',
  },
};
*/

// ==== TASK 3 ====
//TODO:===============================
// Кошик: додати товар, порахувати суму, знайти товар

// getItems(); // має повертати масив товарів
// addItem(product); // має додавати новий товар у items
// getTotalPrice(); // має повертати загальну суму з урахуванням price * quantity
// findItem(productName); // має повертати об’єкт товару з таким ім’ям або null, якщо товар не знайдено

// TODO
// усюди використовуй this.items
// у getTotalPrice() перебери масив і склади підсумок
// у findItem() перебери масив і знайди товар по name
// у addItem() додай новий об’єкт у масив
// Потрібно
// Додати в об’єкт cart методи:
/*
const cart = {
  owner: 'Anna',
  items: [
    { name: 'phone', price: 12000, quantity: 1 },
    { name: 'case', price: 500, quantity: 2 },
  ],
  getItems() {
    return this.items;
  },
  addItem(product) {
    this.items.push(product);
  },
  getTotalPrice() {
    let total = 0;
    for (const item of this.items) {
      total += item.price * item.quantity;
    }
    return total;
  },
  findItem(productName) {
    for (const item of this.items) {
      if (item.name === productName) {
        return item;
      }
    }
    return null;
  },
};

// Перевірка
console.log(cart.getItems());
cart.addItem({ name: 'charger', price: 800, quantity: 1 });
console.log(cart.getItems());
console.log(cart.getTotalPrice());
console.log(cart.findItem('phone'));
console.log(cart.findItem('tablet'));
*/

// ==== TASK 3 ====
// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'
