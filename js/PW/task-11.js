// Магазин і знижки

// Інтернет-магазин запускає акцію.
// Потрібно перерахувати ціни товарів і підготувати їх для відображення.

// Твоя задача:

// Напиши функцію getSaleProducts(products).

// Для кожного товару:

// збережи стару ціну oldPrice
// порахуй нову ціну newPrice з урахуванням discount
// додай isExpensive — true, якщо нова ціна > 10000
// Використай:
// map
// стрілочні функції

const products = [
  { name: 'Phone', price: 12000, discount: 10 },
  // { name: "Phone", oldPrice: 12000, newPrice: 10800, isExpensive: true }
  { name: 'Mouse', price: 800, discount: 5 },
];

// varian 1
// const getSaleProducts = products => {
//     return products.map(({ name, price, discount }) => ({
//         name,
//         oldPrice: price,
//         newPrice: price * discount / 100,
//         isExpensive:
//   })
// };

// variant 2
function getSaleProducts(products) {
  return products.map(products => {
    console.log(this);
    const newPrice =
      products.price - (products.price * products.discount) / 100;
    const isExpensive = newPrice > 10000;
    return {
      name: products.name,
      oldPrice: products.price,
      newPrice,
      isExpensive,
    };
  });
}

console.log(getSaleProducts(products));
// [
//   { name: "Phone", oldPrice: 12000, newPrice: 10800, isExpensive: true },
//   { name: "Mouse", oldPrice: 800, newPrice: 760, isExpensive: false }
// ]
