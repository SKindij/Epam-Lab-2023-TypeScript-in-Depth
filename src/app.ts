// src/app.ts
// для виведення вітання на сторінці
function showHello(divName:string, name:string) {
  const elt = document.getElementById(divName);
  elt!.innerText = `Hello from ${name}`;
};
showHello('greeting', 'TypeScript');

// *імпорти з інших модулей
import { Category } from './enums';
// import {  } from './interfaces';
// import {  } from './types';
// import {  } from './classes';
import { getBooksByCategory, logCategorySearch } from './lib/functions';


// *TODO: Task 09
console.log('--- Asynchronous Patterns ---');
console.log('--- Завдання 09.01. Функція зворотнього виклику ---');

console.log('Before calling getBooksByCategory');
getBooksByCategory(Category.JavaScript, logCategorySearch);
getBooksByCategory(Category.Software, logCategorySearch);
console.log('After calling getBooksByCategory');





