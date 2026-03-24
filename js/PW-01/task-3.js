// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

// const num = +prompt('Введи число вiд 0-4');
// let result = '';

// switch (num) {
//   case 1:
//     result = 'зима';
//     break;

//   case 2:
//     result = 'весна';
//     break;

//   case 3:
//     result = 'лiто';
//     break;

//   case 4:
//     result = 'осiнь';
//     break;

//   default:
//     result = 'Вибачте, але ви маєте ввести значення від 1 до 4 включно';
//     break;
// }
// console.log(result);

// ======== Task =============

// Напишіть функцію greet(name),
//     яка приймає ім'я і повертає рядок
// «Hello, [ім'я]!». Викличте її з різними іменами.

// let userName = prompt('Write your name');
// function greet(name) {
//   return `Hello ${name}`;
// }

// alert(greet(userName));

// ======== Задача 1. =============

// Напиши функцію getFullName,
// яка приймає два параметри firstName і lastName
// і повертає повне ім'я через пробіл. Викличи з різними іменами.

/*
let firstUserName = prompt('Your Fisrt Name pls');
let lastUserName = prompt('Your last Name pls');

function getFullName(firsName, lastName) {
  return `${firstName} ${lastName}.`;
}

console.log(firstUserName, lastUserName);

*/

// ======== Задача 2. =============

// Напиши функцію describeCity,
// яка приймає city і country
// і повертає рядок "Місто [city] знаходиться в [country]".
// Викличи з 3 різними містами.

function describeCity(city, country) {
  return `Місто ${city}, знаходиться в ${country}`;
}
console.log('Kharkiv', 'Ukraine');
console.log('Barcelona', 'Spain');
console.log('Dubai', 'UAE');

// ======== Задача 3. =============

// Напиши функцію repeat,
// яка приймає слово word і число times
// і повертає рядок
// де слово повторюється вказану кількість разів через пробіл.
//  Наприклад repeat("привіт", 3) → "привіт привіт привіт".

// ======== Задача 4. =============

// Напиши функцію introduce,
// яка приймає name і age
// і повертає рядок "Мене звати [name], мені [age] років".
// Викличи зі своїми даними.

// Задача 5.
// Напиши функцію calcArea,
// яка приймає width і height
// і повертає площу прямокутника.
// Виведи результат з поясненням: "Площа прямокутника: [результат]".
