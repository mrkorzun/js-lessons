// Створення елементів
// Історія

// Потрібно динамічно створити список категорій без використання HTML.

// HTML
// <ul class="categories"></ul>
// Дані

const categories = ['Cars', 'Books', 'Games'];

// ТЗ
// для кожного елемента масиву:
// створити <li>
// вставити текст
// додати всі елементи в <ul>
// додати клас category-item кожному <li>

const refs = {
  categoriesList: document.querySelector('.categories'),
};

const createCategoriesItems = category => {
  const item = document.createElement('li');
  item.classList.add('category-item');
  item.textContent = category;
  return;
};

const liEl = categories.map(createCategoriesItems);

refs.categoriesList.append(...liEl);

// console.log(liEl);
console.log(refs.categoriesList);
