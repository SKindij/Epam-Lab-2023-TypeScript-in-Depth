// src/app.ts
// для виведення вітання на сторінці
function showHello(divName:string, name:string) {
  const elt = document.getElementById(divName);
  elt!.innerText = `Hello from ${name}`;
};
showHello('greeting', 'TypeScript');

// *імпорти з інших модулей
// import {  } from './enums';
// import {  } from './interfaces';
// import {  } from './types';
// import {  } from './lib/functions';
import { UniversityLibrarian } from './classes/university-librarian';
import { Library } from './classes/library';
import { RefBook } from './classes';

// *TODO: Task 08
console.log('--- Decorators ---');
console.log('--- Завдання 08.01. Декоратор класу ---');

// створення екземпляра класу UniversityLibrarian
const librarian = new UniversityLibrarian('John Doe', 'john.doe@example.com', 'Library Science');
// демонструємо виклик методу класу
librarian.assistCustomer('Alice', 'Introduction to TypeScript');

// спроба додати нову властивість після заморожування
// librarian.newProperty = 'This should cause an error';
// => Property 'newProperty' does not exist on type 'UniversityLibrarian'.

console.log('--- Завдання 08.02. Декоратор класу ---');

const fLibrarian = new UniversityLibrarian('Anna', 'anna@email.com', 'Library Science');
// виведення інформації у консоль
console.log(`Librarian: ${fLibrarian.name}, Email: ${fLibrarian.email}, Department: ${fLibrarian.department}`);

console.log('--- Завдання 08.03. Декоратор методу ---');

fLibrarian.assistFaculty();
fLibrarian.teachCommunity();
/* output
  => university-librarian.ts:29 Anna Assisting faculty
  => Anna Teaching community
*/

console.log('--- Завдання 08.04. Декоратор методу ---');

const encyclopedia48 = new RefBook(48, 'Encyclopedia of TypeScript', 2023, 4);
encyclopedia48.printItem();

console.log('--- Завдання 08.05. Декоратор поля ---');

const library = new Library();
// виводимо значення id у консоль
console.log(`Library: id ${library.id}`);

console.log('--- Завдання 08.06. Декоратор автоаксесора ---');

// створюємо екземпляр класу UniversityLibrarian
const librarianInstance = new UniversityLibrarian();
// встановлюємо значення для властивості name
librarianInstance.name = 'John Doe';
// отримуємо та виводимо значення властивості name у консоль
console.log(librarianInstance.name); // => Mr./Mrs. John Doe

console.log('--- Завдання 08.07. Декоратор аксесорів ---');

// створення екземпляра класу Encyclopedia
const encyclopedia71 = new RefBook(71, 'Encyclopedia of Epam', 1999, 2);

// спроба встановлення різних значень
try {
  encyclopedia71.copies = 15;

  encyclopedia71.copies = -4; 
} catch (error:any) {
   // виведе: "Invalid value for copies. Must be a positive integer."
  console.error(error.message);
};

console.log("RefBook71 copies:", encyclopedia71.copies);



