// ==== TASK 1: Tech Store "Search & Sort" ====
//
// Уяви, що ти розробляєш частину функціонала для інтернет-магазину гаджетів.
// Користувач вибирає категорію товарів і хоче бачити їх у порядку спадання ціни.
//
// ТЗ:
// 1. Напиши функцію getAvailableProducts(products, categoryName), яка:
//    - фільтрує масив, залишаючи товари лише заданої категорії (category)
//    - за допомогою includes перевіряє, чи є товар у наявності (поле tags містить рядок "in-stock")
// 2. Напиши функцію sortProductsByPrice(products), яка:
//    - повертає новий масив, відсортований від найдорожчого до найдешевшого
//
// У розв'язку обов'язково використай: filter, includes, toSorted.
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
];

// Очікуваний результат для (gadgets, "smartphones"):
// Масив з iPhone 15 та Samsung S23, відсортований за ціною.
