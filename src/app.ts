// src/app.ts
import { Category } from './enums';
import {  } from './interfaces';
import { RefBook, UL, ReferenceItem } from './classes';
import { Library } from './classes/library';

import {
  printRefBook
} from './lib/functions';

// функція для виведення вітання на сторінці
function showHello(divName:string, name:string) {
  const elt = document.getElementById(divName);
  elt!.innerText = `Hello from ${name}`;
}

showHello('greeting', 'TypeScript');

// Task 07
console.log('--- Generics ---');
console.log('--- Завдання 07.01. Загальні функції ---');









