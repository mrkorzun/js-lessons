// ==== TASK 1 =====

// Додай об'єкту apartment кілька нових властивостей:

// area - площа в квадратних метрах, число 60;
// rooms - кількість кімнат, число 3;
// location - місце розташування квартири,
// об'єкт з наступними вкладеними властивостями;
// country - країна, рядок "Jamaica";
// city - місто, рядок "Kingston".
// Зверніть увагу: якщо ви спробуєте додати властивості country і city
// до ще не створеної властивості location, ви отримаєте помилку.
// Спочатку ініціалізуйте location як порожній об'єкт,
// а потім додавайте до нього властивості.
/*
const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4.7,
  price: 5000,
  tags: ['premium', 'promoted', 'top', 'trusted'],
  owner: {
    name: 'Henry Sibola',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};

apartment.area = 60;
apartment.room = 3;
apartment.location = {};
apartment.location = {
  country: 'Jamaica',
  city: 'Kingston',
};

console.log(apartment);
*/

// ==== TASK 2 =====
// Функція countTotalSalary(salaries) приймає об'єкт зарплат (salaries)
// в якості параметра.
// Кожна властивість об'єкта salaries — це ключ,
// що містить ім'я співробітника, та значення - його відповідна зарплатня.

// Доповни код функції countTotalSalary(salaries) так,
// щоб вона повертала загальну суму зарплат всіх співробітників.
/*
function countTotalSalary(salaries) {
  let totalSalary = 0;
  const salariesKey = Object.keys(salaries);

  for (const key of salariesKey) {
    totalSalary += salaries[key];
  }

  return totalSalary;
}

console.log(countTotalSalary({})); // 0
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); // 330
console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })); // 400
*/

// ==== TASK 3 =====
// Масив colors містить колекцію кольорів.
// Кожен колір представлений об'єктом і має властивості hex і rgb
// з відповідними для цього формату і кольору значеннями.

// Перебери масив об'єктів colors, використовуючи цикл for...of.
// Додай у масив hexColors значення властивостей hex,
// а в масив rgbColors - значення властивостей rgb
// з усіх об'єктів масиву colors.
/*
const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];

for (const color of colors) {
  hexColors.push(color['hex']);
  rgbColors.push(color['rgb']);
}
console.log(hexColors);
console.log(rgbColors);
*/

// Значення змінної hexColors - це масив ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
// Значення змінної rgbColors - це масив ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]

// ==== TASK 4 ====
// У тебе є об'єкт з даними магазину.
// Властивість numbers містить масив чисел (є дублікати, іноді по 3 рази)

// 1. Дістань масив чисел з об'єкта
// 2. Створи новий масив duplicatesOnly
// 3. Додай у duplicatesOnly тільки ті числа, які повторюються
// 4. Але! У duplicatesOnly кожне число має бути лише один раз

const data = {
  shop: 'Numbers Store',
  numbers: [4, 7, 2, 4, 9, 7, 4, 1, 2, 8, 2],
};

const dublicatesOnly = [];
const dataNumbers = data.numbers;

for (const num of dataNumbers) {
  if (dataNumbers.indexOf(num) !== dataNumbers.lastIndexOf(num)) {
    //double?
    if (!dublicatesOnly.includes(num)) {
      // do we have double//
      dublicatesOnly.push(num); // push if we don't have
    }
  }
}
console.log(dublicatesOnly);

// Очікуваний результат:
// [4, 7, 2]
