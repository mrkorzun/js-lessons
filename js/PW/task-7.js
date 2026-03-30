// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic',

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// indexOf - only one item
// length - all elements
/*
const styles = ['jazz', 'blues'];
styles.push('rock-n-roll'); // add
const findIndex = styles.indexOf('blues'); // find index

if (findIndex !== -1) {
  //   styles[findIndex] = 'classic';
  styles.splice(findIndex, 1, 'classic'); // find, delete and write 'classic'
}

function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
}

logItems(styles);
*/

// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".
/*
const logins = ['Peter', 'John', 'Igor', 'Sasha'];

function checkLogin(array) {
  const userName = prompt('Введите имя:');
  if (array.includes(userName)) {
    return `Welcome, ${userName}!`;
  }
  return 'User not found';
}
alert(checkLogin(logins));
*/

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.
/*
function calculateAverage(...numbers) {
 // все буде складатися в array все що после ... 
  let totalSum = 0;
  let count = 0;
  for (const number of numbers) {
    // перебор 
    if (typeof number === 'number') {
      // проверка числа 
      totalSum += number;
      count++;
    }
  }
  // если пусто то выведем сообщение 
  if (totalSum !== 0 && count !== 0) {
    return totalSum / count;
  }

  return 'Невозможная операция - на 0 делить нельзя';
}

console.log(calculateAverage(5, 10, 15, 'Hello'));
*/

// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

function sumNeighbors(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    newArr.push(arr[i] + arr[i + 1]);
  }
  return newArr;
}

console.log(sumNeighbors(someArr));
