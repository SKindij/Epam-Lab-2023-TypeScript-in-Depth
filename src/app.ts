// src/app.ts
import { logFirstAvailable } from './lib/utility-functions';


// функція для виведення вітання на сторінці
function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt!.innerText = `Hello from ${name}`;
}

showHello('greeting', 'TypeScript');



// Task 02
console.log('---TASK 02: Types Basics---');
console.log('---Завдання 02.01 Базові типи---');
logFirstAvailable();
