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

const user = {
  name: 'Anna',
  address: {
    city: 'Kyiv',
    country: 'Ukraine',
  },
};
