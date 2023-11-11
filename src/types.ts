// src/types.ts
import { Author, Book, Person } from './interfaces';

// Tuple (кортеж з мітками) для збереження [назви книги, автор]
export type BookInfo = [title:string, author:string];

// тип для масиву з інформацією про бібліотеки
export type LibraryInfo = {
  lib:string;
  books:bigint;
  avgPagesPerBook:number;
};

export type BookProperties = keyof Book | 'isbn';

export type PersonBook = Person & Book;

export type BookOrUndefined = Book | undefined;

// всі властивості у такому аліасі є обов'язковими
export type BookRequiredFields = Required<Book>;
// такий аліас робить всі властивості необов'язковими
export type UpdatedBook = Partial<Book>;

