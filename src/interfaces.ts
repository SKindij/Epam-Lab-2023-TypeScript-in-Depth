// src/interfaces.ts
import { Category } from './enums';

// оголошення інтерфейсу для книжки
interface Book {
  id:number;
  title:string;
  author:string;
  available:boolean;
  category:Category;
  year?:number;
  copies?:number;
  pages?:number;
  markDamaged?:DamageLogger;
  isbn?:string;
};

// оголошення інтерфейсу для функції
interface DamageLogger {
  (reason:string):void;
};

// інтерфейси для різних користувачів
interface Person {
  name:string;
  email:string;
};
interface Author extends Person {
  numBooksPublished:number;
};
interface Librarian extends Person {
  department:string;
  assistCustomer(custName:string, bookTitle:string):void;
};









export { Book, DamageLogger, Author, Librarian, Person };
