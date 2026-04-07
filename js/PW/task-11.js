// Каталог акційних товарів для банера
// Маркетолог хоче сформувати список товарів для акційного банера.
// Туди мають потрапити лише товари, у яких є знижка, які є в наявності,
// і які після знижки коштують не більше 2000 гривень.
// Дані
const products = [
  { name: 'Футболка', price: 800, discount: 10, inStock: true },
  { name: 'Худі', price: 1800, discount: 15, inStock: true },
  { name: 'Куртка', price: 3200, discount: 20, inStock: true },
  { name: 'Кепка', price: 600, discount: 0, inStock: true },
  { name: 'Сумка', price: 2200, discount: 10, inStock: false },
];
// ТЗ
// Створи об’єкт promoManager з методом:
//• getPromoProducts() — має:
//    1. залишити тільки товари, що є в наявності
//    2. залишити тільки товари, у яких знижка більша за 0
//    3. порахувати нову ціну після знижки
//    4. залишити тільки ті товари, у яких нова ціна не перевищує 2000
// 5. повернути новий масив об’єктів у форматі:
//     ▪ { name, newPrice }
// Заготовка
const promoManager = {
  products,

  getPromoProducts() {
    return this.products
      .filter(product => product.inStock && product.discount > 0)
      .map(product => {
        const newPrice =
          product.price - (product.price / 100) * product.discount;
        return {
          name: product.name,
          newPrice,
        };
      })
      .filter(product => product.newPrice <= 2000);
  },
};

console.table(promoManager.getPromoProducts());
console.table(products);
// [
//   { name: "Футболка", newPrice: 720 },
//   { name: "Худі", newPrice: 1530 }
// ]1
