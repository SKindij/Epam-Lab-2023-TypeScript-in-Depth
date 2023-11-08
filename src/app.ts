// src/app.ts
import { Category } from './enums';

import { 
  logFirstAvailable,
  getBookTitlesByCategory, 
  logBookTitles,
  getBookAuthorByIndex,
  totalNumberOfPages,
  createCustomerID,
  createCustomer,
  getBookByID,
  checkoutBooks,
  getTitles,
  bookTitleTransorm
} from './lib/functions';

// функція для виведення вітання на сторінці
function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt!.innerText = `Hello from ${name}`;
}

showHello('greeting', 'TypeScript');


// Task 03
console.log('--- TASK 03: Functions ---');
console.log('--- Завдання 03.01. Функціональний тип ---');

// оголошуємо змінну myID рядкового типу
  let myID:string;
// викликаємо функцію createCustomerID() зі значеннями "Ann" та 10
  myID = createCustomerID("Ann", 10);
// Виводимо отримане значення у консоль
  console.log(myID); // =>> "Ann10"

// оголошення змінної з типом функції
  let idGenerator: (name:string, id:number) => string;
// надаємо змінній функціональний вираз за допомогою стрілочної функції
  idGenerator = (name:string, id:number) => `${name}${id}`;
    idGenerator = createCustomerID;
      console.log(idGenerator('Barbara', 357));

console.log('--- 03.02. Необов’язкові, значення за замовчуванням та рест параметри ---');

// виклик функції з одним, двома та трьома аргументами
createCustomer("Анна"); // Тільки ім'я
createCustomer("Борис", 25); // Ім'я і вік
createCustomer("Кароліна", 30, "Лондон"); // Ім'я, вік і місто

// виклик функцій без аргумента
const javascriptBookTitles = getBookTitlesByCategory();
  console.log(javascriptBookTitles);

logFirstAvailable();

// знаходимо книжку за її ID
const bookWithID1 = getBookByID(1);
  console.log(bookWithID1);

// перевіряємо доступність книг для клієнта
const customerName = 'John Doe';
const bookIDsToCheckout = [1, 3, 5]; 

const availableBooks = checkoutBooks(customerName, ...bookIDsToCheckout);

console.log('--- Завдання 03.03. Перевантаження функцій ---');

const checkedOutBooks = getTitles(false);
  console.log(checkedOutBooks);

console.log('--- Завдання 03.04. Функції-стрердження ---');

console.log(bookTitleTransorm('Learn TypeScript'));
console.log(bookTitleTransorm(273));
