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

// ініціалізуємо змінну ref об'єктом ReferenceItem
const ref = new ReferenceItem('Sample Title', 2023);
// викликаємо метод printItem()
ref.printItem();

// ініціалізуємо властивість _publisher та виведемо значення в консоль
ref.publisher = 'example publisher';
console.log(ref.publisher);






