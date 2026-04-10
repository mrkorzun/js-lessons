// Магазин нараховує бонуси: звичайний клієнт отримує 5% від суми покупок, преміум — 10%.
// Клас сам знає формулу через this.

// Дані
// Дмитро: витратив 5000, не преміум
// Олена: витратив 5000, преміум

// class customer {
//   constructor(name, totalSpent, isPremium) {
//     ((this.name = name),
//       (this.totalSpent = totalSpent),
//       (this.isPremium = isPremium));
//   }
//   getBonus() {
//     const rate = this.isPremium ? 0.1 : 0.05;
//     return this.totalSpent * rate;
//   }
//   getSummary() {
//     return `${this.name}: бонус ${this.getBonus()} грн`;
//   }
// }

// const c1 = new customer('Дмитро', 5000, false);
// const c2 = new customer('Олена', 5000, true);

// // Перевірка
// console.log(c1.getSummary());
// // "Дмитро: бонус 250 грн"
// console.log(c2.getSummary());
// // "Олена: бонус 500 грн"

// ==== TASK 2 ====
// Клас BankAccount зберігає баланс у приватному полі.
// Ззовні до нього не можна дістатися напряму — тільки через методи.
// Депозит спрацьовує лише для позитивних сум, зняття — тільки якщо грошей достатньо.

class BankAccount {
  #balance = '1000';
  constructor(balance) {
    this.#balance = balance;
  }
  get balance() {
    return this.#balance;
  }

  deposit(amount) {
    if (amount <= 0) return;
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      return `Now enough many on your balance`;
    }
    if (amount < 0) {
      return 'Not correct!';
    }
    this.#balance -= amount;
  }
}

const acc = new BankAccount(1000);
// console.log(acc);

// Дані
// Початковий баланс: 1000 грн
// Операції: поповнити 500, зняти 200, зняти 2000 (недостатньо), зняти -50 (невалідно)
// Перевірка
console.log(acc.balance); // 1000
acc.deposit(500);
console.log(acc.balance); // 1500
acc.withdraw(200);
console.log(acc.balance); // 1300
console.log(acc.withdraw(2000)); // нічого не відбувається
console.log(acc.balance); // 1300
console.log(acc.withdraw(-50)); // нічого не відбувається
console.log(acc.balance); // 1300

// ==== TASK 3 ====
// Клас ProductCard має метод handleBuy.
// Його зберігають у змінну і викликають пізніше як звичайну функцію — this губиться.
// Зафіксуй контекст так, щоб метод завжди знав про свій товар.

// Дані
// Назва: "iPhone 15", ціна: 42000 грн
// Перевірка
// handler();
// "Додано до кошика: iPhone 15 за 42000 грн"
