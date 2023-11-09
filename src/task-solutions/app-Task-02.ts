// src/app-Task-02.ts
import { Category } from './enums';

import { 
  logFirstAvailable,
  getBookTitlesByCategory, 
  logBookTitles,
  getBookAuthorByIndex,
  totalNumberOfPages
} from './lib/Types-Basics-Task-02';




// функція для виведення вітання на сторінці
function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt!.innerText = `Hello from ${name}`;
}

showHello('greeting', 'TypeScript');

// Task 02
console.log('--- TASK 02: Types Basics ---');
console.log('--- Завдання 02.01 Базові типи ---');

logFirstAvailable();

const javascriptBooks = getBookTitlesByCategory(Category.JavaScript);
  console.log('JavaScript книги:');
  logBookTitles(javascriptBooks);

console.log('---Завдання 02.02 Приведення до константи---');

let bookIndex = 4;
const bookInfo = getBookAuthorByIndex(bookIndex);
  if (bookInfo) {
    const [title, author] = bookInfo;
	console.log(`Результат пошуку за індексом ${bookIndex}.`);
    console.log(`Назва книги: ${title}`);
    console.log(`Автор: ${author}`);
  } else {
    console.log(`Книга за індексом ${bookIndex} не знайдена.`);
  }

// конвертуємо значення bigint у рядок (string) і виводимо в консоль
console.log('Загальна кількість сторінок у всіх бібліотеках: ', totalNumberOfPages.toString());
