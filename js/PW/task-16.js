// ==== TASK 1 ==== Fri 17 Apr
// Контекст: У навчальному симуляторі є квадратний блок.
// Натискання на кнопку має кожного разу зміщувати його праворуч,
// ніби персонаж робить крок.
// Базовий HTML:
// <section class="task move-task">
//   <h2>Рух елемента</h2>
//   <button class="move-right" type="button">Right</button>
//   <div class="field">
//     <div class="box"></div>
//   </div>
// </section>
// Розширене ТЗ:
// • Після кожного кліку на кнопку елемент .box має зміщуватись вправо на 10px.
// • Зміщення накопичується: другий клік рухає ще на 10px від уже нової позиції.
// • Рух має відбуватися лише по горизонталі;
// по вертикалі елемент залишаєтся на місці.
// • Студент самостійно вирішує, чи керувати позицією через left,
// transform або інший коректний спосіб.

// // Varian 1
// const refs = {
//   box: document.querySelector('.box'),
//   btn: document.querySelector('.move-right'),
// };

// const boxStyle = getComputedStyle(refs.box);
// // console.log(boxStyle.left);
// let boxStyleLeft = parseFloat(boxStyle.left);
// // console.log(boxStyleLeft);

// refs.btn.addEventListener('click', () => {
//   console.log('Click');
//   boxStyleLeft += 24;
//   refs.box.style.left = `${boxStyleLeft}px`;
// });

// Varian2
// const refs = {
//   moveBtn: document.querySelector('.move-right'),
//   boxHero: document.querySelector('.box'),
// };
// let step = 0;
// const onMoveBtnClick = () => {
//   step += 10;
//   refs.boxHero.style.transform = `translate(${step}px, 0px)`;
// };
// refs.moveBtn.addEventListener('click', onMoveBtnClick);

// ==== TASK 2 ====
// Видалення елементів списку
// Контекст:
// У списку нотаток кожен елемент має кнопку видалення.
// Оскільки елементів може ставати більше,
// обробник потрібно повісити не на кожну кнопку окремо,
// а на батьківський список.

// Базовий HTML:
// <ul class="notes">
//   <li class="note-item">
//     <span>Buy milk</span>
//     <button class="delete-btn" type="button">Delete</button>
//   </li>
//   <li class="note-item">
//     <span>Read book</span>
//     <button class="delete-btn" type="button">Delete</button>
//   </li>
// </ul>

// Розширене ТЗ:
// • Повісь один слухач події click на .notes.
// • Якщо клік відбувся саме по .delete-btn,
// потрібно видалити відповідний .note-item.
// • Для пошуку потрібного елемента використовуй closest.
// • Інші елементи списку не повинні реагувати на клік.
// • Не вішай окремі слухачі на кожну кнопку.

// const notes = document.querySelector('.notes');

// notes.addEventListener('click', event => {
//   // console.log('click'); // проверка слухача
//   // как мне "обмежити" клики на странице?
//   // если одна кнопка в разметке
//   // if (event.target.nodeName !== 'BUTTON') {
//   //   return;
//   // }
//   // console.log(event.target.nodeName);
//   // вот как: нужно сделать if{} и если это не наш тег то выходим из функции
//   // если несколько то лучше вторую ифку с classList.contains("class")
//   if (!event.target.classList.contains('delete-btn')) {
//     return;
//   }
//   console;
//   // пошук вверх closest
//   event.target.closest('.note-item').remove();
//   // теперь удаляем найденную лишку от кнопки
// });

// ==== TASK 3 ====
