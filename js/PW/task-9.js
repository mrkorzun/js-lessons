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
