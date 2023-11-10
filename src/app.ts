// src/app.ts
import { Category } from './enums';
import { Book, DamageLogger, Author, Librarian  } from './interfaces';
import { ReferenceItem } from './classes';

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
  bookTitleTransorm,
  printBook,
  getProperty
} from './lib/functions';

const favoriteAuthor:Author = {
  name: 'John Doe',
  email: 'johndoe@example.com',
  numBooksPublished: 10,
};

const favoriteLibrarian:Librarian = {
  name: 'Jane Smith',
  email: 'janesmith@example.com',
  department: 'Fiction',
  assistCustomer: (custName, bookTitle) => {
    console.log(`Assisting customer ${custName} with the book "${bookTitle}"`);
  },
};

// функція для виведення вітання на сторінці
function showHello(divName:string, name:string) {
  const elt = document.getElementById(divName);
  elt!.innerText = `Hello from ${name}`;
}

showHello('greeting', 'TypeScript');


// Task 05 Classes
console.log('--- TASK 05: Classes ---');
console.log('--- Завдання 05.01. Створення та використання класів ---');

logFirstAvailable();

// ініціалізуємо змінну refItem об'єктом ReferenceItem
const refItem = new ReferenceItem(1, 'Sample Title', 2023);
// виводимо об'єкт у консоль
console.dir(refItem);

// викликаємо метод printItem()
refItem.printItem();

// ініціалізуємо властивість _publisher та виведемо її в консоль
refItem.publisher = 'example publisher';
console.log(refItem.publisher);

// викликаємо метод getID() та виводимо результат у консоль
console.log(`ID: ${refItem.getID()}`);
