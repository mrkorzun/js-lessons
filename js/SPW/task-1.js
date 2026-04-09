// ==== TASK 1: Tech Store "Search & Sort" ====
//

// Дані для перевірки:
const gadgets = [
  {
    id: 1,
    name: 'iPhone 15',
    price: 35000,
    category: 'smartphones',
    tags: ['new', 'in-stock'],
  },
  {
    id: 2,
    name: 'Samsung S23',
    price: 30000,
    category: 'smartphones',
    tags: ['sale', 'in-stock'],
  },
  {
    id: 3,
    name: 'MacBook Pro',
    price: 70000,
    category: 'laptops',
    tags: ['in-stock'],
  },
  {
    id: 4,
    name: 'Asus ZenBook',
    price: 45000,
    category: 'laptops',
    tags: ['out-of-stock'],
  },
  {
    id: 5,
    name: 'iPad Air',
    price: 25000,
    category: 'tablets',
    tags: ['in-stock'],
  },
  {
    id: 6,
    name: 'Simens',
    price: 19000,
    category: 'smartphones',
    tags: ['old', 'out-of-stock'],
  },
];
// Уяви, що ти розробляєш частину функціонала для інтернет-магазину гаджетів.
// Користувач вибирає категорію товарів і хоче бачити їх у порядку спадання ціни.

// ТЗ:
// 1. Напиши функцію getAvailableProducts(products, categoryName), яка:
//    - фільтрує масив, залишаючи товари лише заданої категорії (category)
//    - за допомогою includes перевіряє, чи є товар у наявності (поле tags містить рядок "in-stock")
// 2. Напиши функцію sortProductsByPrice(products), яка:
//    - повертає новий масив, відсортований від найдорожчого до найдешевшого
//
// У розв'язку обов'язково використай: filter, includes, toSorted.
//

const getAvailableProducts = (products, categoryName, tag) => {
  return products.filter(
    product => product.category === categoryName && product.tags.includes(tag)
  );
};

const sortProductsByPrice = products =>
  products.toSorted((a, b) => b.price - a.price);

// Очікуваний результат для (gadgets, "smartphones"):
// Масив з iPhone 15 та Samsung S23, відсортований за ціною.

// 1. Перевірка фільтрації та наявності (смартфони в наявності)
console.log('--- Тест 1 (Smartphones in-stock) ---');
const inStock = getAvailableProducts(gadgets, 'smartphones', 'new');
console.log(inStock);
// Очікуємо: iPhone 15 та Samsung S23 (Asus та інші не мають потрапити)

// 2. Перевірка сортування за ціною (від найдорожчого)
console.log('--- Тест 2 (Sorting by Price) ---');
console.log(sortProductsByPrice(inStock));
// Очікуємо: iPhone 15 (35000) має бути ПЕРШИМ, Samsung (30000) - ДРУГИМ
