// src/app.ts
import { Category } from './enums';
import { Book, DamageLogger, Author, Librarian  } from './interfaces';

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


// Task 04
console.log('--- TASK 04: Interfaces ---');
console.log('--- Завдання 04.01. Об’явлення інтерфейсу ---');
logFirstAvailable();

const myBook:Book = {
  id: 5,
  title: 'Colors, Backgrounds, and Gradients',
  author: 'Eric A. Meyer',
  available: true,
  category: Category.CSS,
  year: 2015,
  copies: 3,
  pages: 200,
  markDamaged: function (reason:string) {
    console.log(`Damaged: ${reason}`);
  }
};

printBook(myBook);
// для перевірки наявності методу перед викликом використовуємо операцію &&
myBook.markDamaged && myBook.markDamaged('missing back cover');

console.log('--- Завдання 04.02. Об’явлення інтерфейсу для функціонального типу ---');
const logDamage:DamageLogger = function (reason:string) {
  console.log(`Damage logged: ${reason}`);
};

console.log('--- Завдання 04.03. Розширення інтерфейсів ---');
favoriteLibrarian.assistCustomer('John', 'Introduction to Programming');

console.log('--- Завдання 04.04. Необов’язковий ланцюжок ---');

const offer:any = {
  book: {
    title: 'Essential TypeScript',
  },
};
/*
  Оператор ?. використовується для зручного доступу до властивостей об'єкта та методів,
  перевіряючи на наявність об'єкта перед доступом до властивостей або методів.
  Якщо властивість або метод існують, вони викликаються або доступні; якщо немає, то повертається undefined.
*/
console.log(offer.magazine);
console.log(offer.magazine?.getTitle());
console.log(offer.book?.title);
console.log(offer.book?.authors?.[0]);
console.log(offer.book?.authors?.[0].name);

console.log('--- Завдання 04.05. keyof оператор ---');
console.log(getProperty(myBook, 'title')); // Виведе "Sample Book"
console.log(getProperty(myBook, 'markDamaged')); // Виведе ім'я функції "anonymous"
console.log(getProperty(myBook, 'isbn')); // Виведе undefined, оскільки властивість "isbn" не існує.

