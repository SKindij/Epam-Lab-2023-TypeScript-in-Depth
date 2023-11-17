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

// *TODO: Task 08
console.log('--- Decorators ---');
console.log('--- Завдання 08.01. Декоратор класу ---');

// створення екземпляра класу UniversityLibrarian
const librarian = new UniversityLibrarian('John Doe', 'john.doe@example.com', 'Library Science');
// виведення інформації у консоль
console.log(`Librarian: ${librarian.name}, Email: ${librarian.email}, Department: ${librarian.department}`);
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




