// src/types.ts
// тип для масиву книг
export type Book = {
  id:number;
  title:string;
  author:string;
  available:boolean;
  category:Category;
};

// Tuple (кортеж з мітками) для збереження [назви книги, автор]
export type BookInfo = [title:string, author:string];
// тип для масиву з інформацією про бібліотеки
export type LibraryInfo = {
  lib:string;
  books:bigint;
  avgPagesPerBook:number;
};