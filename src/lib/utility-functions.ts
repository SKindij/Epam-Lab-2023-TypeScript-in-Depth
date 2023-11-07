// src/lib/utility-functions.ts
import { Category } from '../emums';

// тип для масиву книг
type Book = {
  id:number;
  title:string;
  author:string;
  available:boolean;
  category:Category;
};

// функція для отримання масиву усіх книг
function getAllBooks(): Book[] {
  // масив книжок із визначеним типом
  const books:Book[] = [
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
export function logFirstAvailable(books:Book[] = getAllBooks()): void {
  const totalBooks = books.length;
  const firstAvailableBook = books.find((book) => book.available);

  console.log(`Кількість книг у масиві: ${totalBooks}`);
  console.log(`Назва першої доступної книги: ${firstAvailableBook?.title}`);
};
