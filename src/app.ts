// path src/app.ts
// для виведення вітання на сторінці
function showHello(divName:string, name:string) {
  const elt = document.getElementById(divName);
  elt!.innerText = `Hello from ${name}`;
};
showHello('greeting', 'TypeScript');

// *імпорти з інших модулей
import { Category } from './enums';
import { Book } from './interfaces';
import { } from './classes';
import { } from './classes/library';

import {
  purge
} from './lib/functions';

// *TODO: Task 07
console.log('--- Generics ---');
console.log('--- Завдання 07.01. Загальні функції ---');

const inventory:Book[] = [
  { id: 10, title: 'C Programming Language', author: 'Steve McConnell', available: true, category: Category.Software},
  { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
  { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
  { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];
console.log(purge(inventory));
console.log(purge([101, 102, 103, 104, 105, 106, 107]));

// let purgeNumbers = purge<number>(inventory:number[]);

console.log('--- Завдання 07.02. Загальні інтерфейси і класи ---');







