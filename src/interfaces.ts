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

interface TOptions {
  duration?:number;
  speed?:number;
}

interface Magazine {
  title:string;
  publisher:string;
};

interface ShelfItem {
  title:string;
};




export {
  Book, DamageLogger as Logger, Author,
  Librarian, Person, TOptions, Magazine,
  ShelfItem
};
