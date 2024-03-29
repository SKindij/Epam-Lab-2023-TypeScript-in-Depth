/* eslint-disable no-redeclare */
// src/lib/utility-functions.ts
import { Category } from '../enums';
import { Book, BookInfo, LibraryInfo } from '../types';

// оголошуємо масив даних про бібліотеки з const assertion
const librarysData: readonly LibraryInfo[] = [
  { lib: 'libName1', books: 1_000_000_000n, avgPagesPerBook: 250 },
  { lib: 'libName2', books: 5_000_000_000n, avgPagesPerBook: 300 },
  { lib: 'libName3', books: 3_000_000_000n, avgPagesPerBook: 280 },
];

// оголошуємо масив книг з const assertion
const books: readonly Book[] = [
  { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript },
  { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript },
  { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
  { id: 4, title: 'Mastering JavaScript OOP', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript },
  { id: 5, title: 'TypeScript Fundamentals', author: 'John Smith', available: true, category: Category.TypeScript },
  { id: 6, title: 'HTML5 Essentials', author: 'David Brown', available: false, category: Category.HTML },
  { id: 7, title: 'Angular Development', author: 'Mary Johnson', available: true, category: Category.Angular },
];

// функція для отримання масиву усіх книг
function getAllBooks(): readonly Book[] {
  return books;
};

// функція для виводу простої інформації про книги
export function logFirstAvailable(books: readonly Book[] = getAllBooks()): void {
  const totalBooks = books.length;
  const firstAvailableBook = books.find((book) => book.available);

  console.log(`Кількість книг у масиві: ${totalBooks}`);
  console.log(`Назва першої доступної книги: ${firstAvailableBook?.title}`);
};

// функція, яка повертає масив назв книг за заданою категорією
export function getBookTitlesByCategory(category:Category = Category.JavaScript): string[] {
  const books = getAllBooks(); // оголошення без анотації типу
  const bookTitles:string[] = books
    .filter((book) => book.category === category)
    .map((book) => book.title);
  return bookTitles;
};

// функція, яка виводить масив рядків в консоль
export function logBookTitles(titles:string[]): void {
  titles.forEach((title) => {
    console.log(title);
  });
};

// функція, що за індексом повертає пару [назва книжки + автор]
export function getBookAuthorByIndex(index:number): BookInfo|undefined {
  const books = getAllBooks(); // оголошення без анотації типу
  const book = books[index];
  // якщо потрібна книжка є у масиві
  if (book) {
    return [book.title, book.author];
  }
  // а якщо книги з заданим індексом не знайдено
  return undefined;
};

// функція для підрахунку кількості сторінок книг у трьох бібліотеках
function calcTotalPages(libraryData: readonly LibraryInfo[]): bigint {
  let totalPages: bigint = 0n;
  // проходимося по кожній бібліотеці та додаємо кількість сторінок до загальної
  for (const library of libraryData) {
    totalPages += library.books * BigInt(library.avgPagesPerBook);
  }

  return totalPages;
};
export const totalNumberOfPages:bigint = calcTotalPages(librarysData);

// функція повертає конкатенацію вхідних значень у вигляді рядка
export function createCustomerID(name:string, id:number): string {
  return `${name}${id}`;
};

// функція, яка виводить ім'я, вік і місто клієнта в консоль
export function createCustomer(name:string, age?:number, city?:string): void {
  console.log(`Ім'я клієнта: ${name}`);
  if (age !== undefined) {
    console.log(`Вік клієнта: ${age}`);
  }
  if (city !== undefined) {
    console.log(`Місто клієнта: ${city}`);
  }
};

// функція, яка приймає id книжки та повертає книжку
export function getBookByID(id:number): Book|undefined {
  const books = getAllBooks();
  return books.find((book) => book.id === id);
};

// функція, яка перевіряє доступність книжок за ідентифікаторами та повертає назви доступних книг
export function checkoutBooks(customer:string, ...bookIDs:number[]): string[] {
  console.log(`Перевірка для клієнта ${customer}`);
  const availableBooks:string[] = [];
    bookIDs.forEach((bookID) => {
      const book = getBookByID(bookID);
      if (book && book.available) {
        availableBooks.push(book.title);
      }
    });

  console.log(`У бібліотеці є такі доступні книги:`);
  availableBooks.forEach((title) => {
    console.log(title);
  });

  return availableBooks;
}

// сигнатури функції з різними типами параметрів 
export function getTitles(author:string): string[];
export function getTitles(available:boolean): string[];
export function getTitles(id:number, available:boolean): string[];
// основна реалізація функції з використанням решти параметрів
export function getTitles(...args: [string|boolean] | [number, boolean]): string[] {
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
}

// приймає будь-який тип даних, і стверджує, що data є рядком 
function assertStringValue(data:any): asserts data is string {
    if (typeof data !== 'string') {
        throw new Error('Value should have been a string');
    }
}
// функція перевертання назви книжки
export function bookTitleTransorm(title:any): string {
    // перевіряємо, що введені дані є рядком
    assertStringValue(title);
    // перетворюємо title у масив символів, реверсуємо його та з'єднуємо назад у рядок
    return [...title].reverse().join('');
}
