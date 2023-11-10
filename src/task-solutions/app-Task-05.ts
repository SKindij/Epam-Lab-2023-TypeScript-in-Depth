// src/app.ts
import { Category } from './enums';
import { Book, DamageLogger, Author, Librarian  } from './interfaces';
import { ReferenceItem, Encyclopedia, UniversityLibrarian } from './classes';

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

console.log('--- Завдання 05.02. Розширення класів ---');

// створення нового об'єкта Encyclopedia
const refBook = new Encyclopedia(11, 'Encyclopedia of Science', 2023, 2);

// ініціалізуємо властивість _publisher та виведемо її в консоль
refBook.publisher = 'example publisher';
console.log(refBook.publisher); // => EXAMPLE PUBLISHER

// виводимо об'єкт у консоль
console.dir(refBook); // output => Encyclopedia{...}

// викликаємо різні методи
console.log('--- Properties of refBook ---');
console.log(`ID: ${refBook.getID()}`); // output => ID: 11
refBook.printItem();
/* output:
 => Encyclopedia of Science was published in 2023
 => Department: Default Department
 => Edition: 2 (2023)
*/

console.log('--- Завдання 05.03. Абстрактні класи ---');
refBook.printCitation(); // output => Encyclopedia of Science - 2023

console.log('--- Завдання 05.04. Реалізація інтерфейсів класами ---');
let favoriteLibrarian2:Librarian = new UniversityLibrarian('Librarian Name', 'librarian@email.com', 'Library Science');
favoriteLibrarian.assistCustomer('Alice', 'Introduction to Programming');



