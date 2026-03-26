// ==== task 1
console.log(true || false);
console.log(true && false);

// ===== task 2

// Функція checkAccess(subType) перевіряє,
// чи може користувач отримати доступ до контенту.
// Перевірка відбувається за типом передплати.
// Використовуючи оператор "АБО", доповни код функції так,
// щоб якщо значення параметра subType дорівнює рядкам "pro" або "vip",
// то функція повертала true і користувач отримував доступ.
// В іншому випадку повертала false.
/*
function checkAccess(subType) {
  return subType === 'pro' || subType === 'vip';
}
console.log(checkAccess('pro'));
console.log(checkAccess('starter'));
console.log(checkAccess('vip'));
console.log(checkAccess('free'));
*/

// ==== task3

// Функція toggleModalVisibility(isVisible) перемикає стан відображення модального вікна.
// У параметрі isVisible вона очікує буль true або false.
// Доповни код функції так, щоб вона повертала протилежне значення цього параметра.
/*
function toggleModalVisibility(isVisible) {
  return !isVisible;
}
console.log(toggleModalVisibility(true));
console.log(toggleModalVisibility(false));
*/
