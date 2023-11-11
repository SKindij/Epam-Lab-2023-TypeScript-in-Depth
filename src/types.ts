// src/types.ts
import { Author, Book, Person } from './interfaces';
import { createCustomer } from './lib/functions';

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

/*
  Утилітарний тип Omit дозволяє створювати новий тип,
  який має всі властивості вихідного типу,
  але без певної властивості, вказаної в другому параметрі.
*/
export type AuthorWoEmaial = Omit<Author, 'email'>;

export type CreateCustomerFunctionType = typeof createCustomer;

// аліас для функції, яка приймає три параметри і повертає symbol
export type fn = (param1:string, param2:number, param3:boolean)=>symbol;
// аліаси, які повертають типи першого, другого та третього параметрів функції
export type Param1<T> = T extends (param1:infer P1, param2:any, param3:any)=>any ? P1 : never;
export type Param2<T> = T extends (param1:any, param2:infer P2, param3:any)=>any ? P2 : never;
export type Param3<T> = T extends (param1:any, param2:any, param3:infer P3)=>any ? P3 : never;

export type P1 = Param1<fn>;
export type P2 = Param2<fn>;
export type P3 = Param3<fn>;

// тип, який визначає ключі з обов'язковими властивостями
type KeysWithRequiredProps<T> = {
  [K in keyof T]:{} extends { [P in K]:T[K] } ? never : K;
}[keyof T];
// тип, який визначає ключі з необов'язковими властивостями
type KeysWithOptionalProps<T> = {
  [K in keyof T]:{} extends { [P in K]:T[K] } ? K : never;
}[keyof T];

// тип, який визначає об'єкт з обов'язковими властивостями
export type RequiredProps<T extends object> = Pick<T, KeysWithRequiredProps<T>>;
// тип, який визначає об'єкт з необов'язковими властивостями
export type OptionalProps<T extends object> = Pick<T, KeysWithOptionalProps<T>>;

// використання утиліти для отримання типу Book з обов'язковими властивостями
type BookRequiredProps = RequiredProps<Book>;
// використання утиліти для отримання типу Book з необов'язковими властивостями
type BookOptionalProps = OptionalProps<Book>;

// утилітарний тип, який видаляє вказані властивості з типу
type RemoveProps<T extends object, TProps extends keyof T> = {
  [prop in keyof T as Exclude<prop, TProps>]:T[prop];
};
/*
  T extends object: обмеження, яке гарантує, що T є об'єктом
  TProps extends keyof T: обмеження, яке гарантує, що TProps є ключем (властивістю) типу T
  prop in keyof T: перебір всіх властивостей типу T
  as Exclude<prop, TProps>: властивості, які ми хочемо видалити
  : T[prop]: значення залишених властивостей збігаються з оригінальними
*/
