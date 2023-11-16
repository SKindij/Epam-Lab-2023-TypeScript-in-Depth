//  path src/lib/functions.ts
/* eslint-disable no-redeclare */
import { Category } from '../enums';
import { Book, TOptions } from '../interfaces';
import { BookInfo, LibraryInfo, BookProperties, BookOrUndefined } from '../types';
import { RefBook } from '../classes';

// функція для отримання масиву усіх книг
export function getAllBooks():readonly Book[] {
  // оголошуємо масив книг з const assertion
  const books = <const>[
    { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript },
    { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript },
    { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
    { id: 4, title: 'Mastering JavaScript OOP', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript },
    { id: 5, title: 'TypeScript Fundamentals', author: 'John Smith', available: true, category: Category.TypeScript },
    { id: 6, title: 'HTML5 Essentials', author: 'David Brown', available: false, category: Category.HTML },
    { id: 7, title: 'Angular Development', author: 'Mary Johnson', available: true, category: Category.Angular },
  ];
  return books;
};
// функція для виводу простої інформації про книги
export function logFirstAvailable(books:readonly Book[] = getAllBooks()):void {
  const totalBooks = books.length;
  const firstAvailableBook = books.find((book) => book.available);
  console.log(`Кількість книг у масиві: ${totalBooks}`);
  console.log(`Назва першої доступної книги: ${firstAvailableBook?.title}`);
};

// функція, яка повертає масив назв книг за заданою категорією
export function getBookTitlesByCategory(category:Category = Category.JavaScript):string[] {
  const books = getAllBooks(); // оголошення без анотації типу
  const bookTitles:string[] = books
    .filter((book) => book.category === category)
    .map((book) => book.title);
  return bookTitles;
};
// функція, яка виводить масив рядків в консоль
export function logBookTitles(titles:string[]):void {
  titles.forEach((title) => {
    console.log(title);
  });
};
// функція, що за індексом повертає пару [назва книжки + автор]
export function getBookAuthorByIndex(index:number):BookInfo|undefined {
  const books = getAllBooks(); // оголошення без анотації типу
  const book = books[index];
  // якщо потрібна книжка є у масиві
  if (book) {
    return [book.title, book.author];
  }
  // а якщо книги з заданим індексом не знайдено
  return undefined;
};

// функція повертає конкатенацію вхідних значень у вигляді рядка
export function createCustomerID(name:string, id:number):string {
  return `${name}/${id}`;
};

// функція, яка виводить ім'я, вік і місто клієнта в консоль
export function createCustomer(name:string, age?:number, city?:string):void {
  console.log(`Ім'я клієнта: ${name}`);
  if (age !== undefined) {
    console.log(`Вік клієнта: ${age}`);
  }
  if (city !== undefined) {
    console.log(`Місто клієнта: ${city}`);
  }
};

// функція, яка приймає id книжки та повертає книжку
export function getBookByID(id:Book['id']):BookOrUndefined {
  const books = getAllBooks();
  return books.find(book => book.id === id);
};

// функція, яка перевіряє доступність книжок за ідентифікаторами та повертає назви доступних книг
export function checkoutBooks(customer:string, ...bookIDs:number[]):string[] {
  console.log(`Перевірка для клієнта ${customer}`);
  const availableBooks:string[] = [];
  bookIDs.forEach((bookID) => {
    const book = getBookByID(bookID);
    if (book && book.available) {
      availableBooks.push(book.title);
    }
  });

  console.log('У бібліотеці є такі доступні книги:');
  availableBooks.forEach((title) => {
    console.log(title);
  });
  return availableBooks;
};

// сигнатури функції з різними типами параметрів
export function getTitles(author:string):string[];
export function getTitles(available:boolean):string[];
export function getTitles(id:number, available:boolean):string[];
// основна реалізація функції з використанням решти параметрів
export function getTitles(...args:[string|boolean] | [number, boolean]):string[] {
  const books = getAllBooks();
  // якщо функції передано 1 аргумент
  if (args.length === 1) {
    const [arg] = args;
    if (typeof arg === 'string') {
      // фільтруємо книги за автором та повертаємо їх заголовки
      return books
        .filter(book => book.author === arg)
        .map(book => book.title);
    } else if (typeof arg === 'boolean') {
      // фільтруємо книги за доступністю та повертаємо заголовки
      return books
        .filter(book => book.available === arg)
        .map(book => book.title);
    }
    // якщо функції передано 2 аргументи
  } else if (args.length === 2) {
    const [id, available] = args;
    if (typeof id === 'number' && typeof available === 'boolean') {
      // фільтруємо книги за ID та доступністю
      return books
			          .filter(book => book.id === id && book.available === available)
				        .map(book => book.title);
    }
  }
  // якщо жодна з умов не співпадає, повертаємо порожній масив
  return [];
};

// приймає будь-який тип даних, і стверджує, що data є рядком
function assertStringValue(data:any):asserts data is string {
  if (typeof data !== 'string') {
    throw new Error('Value should have been a string');
  }
};
// функція перевертання назви книжки
export function bookTitleTransorm(title:any):string {
  // перевіряємо, що введені дані є рядком
  assertStringValue(title);
  // перетворюємо title у масив символів, реверсуємо його та з'єднуємо назад у рядок
  return [...title].reverse().join('');
};

export function printBook(book:Book):void {
  console.log(`${book.title} by ${book.author}`);
};

export function setDefaultConfig(options:TOptions):TOptions {
  return {
    duration: options.duration ?? 90, // значення за замовчуванням якщо не задано
    speed: options.speed ?? 40, // значення за замовчуванням якщо не задано
  };
};

// функціz-ствердження умови
export function assertRefBookInstance(condition:any):asserts condition {
  if (!condition) {
    throw new Error('It is not an instance of RefBook');
  }
};

export function printRefBook(data:any):void {
  assertRefBookInstance(data instanceof RefBook);
  data.printItem();
};

// дженерик (загальна) функція
export function purge<T>(invetory:T[]):T[] {
  // повертає початковий масив без двух перших елементів
  return invetory.slice(2);
};

export function getProperty(book:Book, prop:BookProperties):any {
  // кажемо TS, що властивість prop є ключем типу Book
  const value = book[prop as keyof Book];
  if (typeof value === 'function') {
    return value.name;
  }
  return value;
};

/**
 * отримати властивість за ключем і повернути її значення або ім'я методу
 * @param obj об'єкт, з якого потрібно отримати властивість
 * @param prop ключ властивості, яку потрібно отримати
 * @returns значення властивості або ім'я методу
  Використання keyof забезпечує, що prop може бути лише ключем об'єкта TObject.
 
 */
export function getObjectProperty<TObject, TKey extends keyof TObject>(
  obj:TObject, prop:TKey
):TObject[TKey]|string {
  const value = obj[prop];
  // для функції повертаємо її назву, а для властивості її значення
  return typeof value === 'function' ? value.name : value;
};

/*
// функція, що повертає різні значення, залежно від параметру
export function update(flag: boolean) {
  return flag ? "string result" : 42;
}
*/





