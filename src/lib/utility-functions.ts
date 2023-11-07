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
export function logFirstAvailable(): void {
  const books = getAllBooks(); // оголошення без анотації типу
  const totalBooks = books.length;
  const firstAvailableBook = books.find((book) => book.available);

  console.log(`Кількість книг у масиві: ${totalBooks}`);
  console.log(`Назва першої доступної книги: ${firstAvailableBook?.title}`);
};

// функція, яка повертає масив назв книг за заданою категорією
export function getBookTitlesByCategory(category:Category): string[] {
  const books = getAllBooks(); // оголошення без анотації типу
  const bookTitles:string[] = books
    .filter((book) => book.category === category)
    .map((book) => book.title);
  return bookTitles;
}

// функція, яка виводить масив рядків в консоль
export function logBookTitles(titles:string[]): void {
  titles.forEach((title) => {
    console.log(title);
  });
}

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
}

// функція для підрахунку кількості сторінок книг у трьох бібліотеках
function calcTotalPages(libraryData: readonly LibraryInfo[]): bigint {
  let totalPages: bigint = 0n;
  // проходимося по кожній бібліотеці та додаємо кількість сторінок до загальної
  for (const library of libraryData) {
    totalPages += library.books * BigInt(library.avgPagesPerBook);
  }

  return totalPages;
}

export const totalNumberOfPages:bigint = calcTotalPages(librarysData);
