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

// 09.01. Інтерфейси для Функцій зворотнього виклику
export interface LibMgrCallback {
  (err:Error|null, titles:string[]|null):void;
};
// дженерик дозволяє використовувати інтерфейс для різних типів даних
export interface Callback<T> {
  (err:Error|null, data:T|null):void;
};




export {
  Book, DamageLogger as Logger, Author,
  Librarian, Person, TOptions, Magazine,
  ShelfItem
};
