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

// утиліта для призначення типу, як у заданої функції
export type CreateCustomerFunctionType = typeof createCustomer;

// аліас для функції, яка приймає три параметри і повертає symbol
export type fn = (param1:string, param2:number, param3:boolean)=>symbol;
// аліаси, які повертають типи першого, другого та третього параметрів функції
export type Param1<T> = T extends (param1:infer R, param2:any, param3:any)=>any ? R : never;
export type Param2<T> = T extends (param1:any, param2:infer R, param3:any)=>any ? R : never;
export type Param3<T> = T extends (param1:any, param2:any, param3:infer R)=>any ? R : never;

export type P1 = Param1<fn>;
export type P2 = Param2<fn>;
export type P3 = Param3<fn>;



// ? далі йде більш складна тема

/**
  @type KeysWithRequiredProps<T> - новий тип, що визначає ключі об'єкту T,
  для яких властивості є обов'язковими;
  @template [K in keyof T] - ітерація через ключі об'єкту T;
  @template { [P in K]: T[K] } - створює  об'єкт з однією властивістю - P,
  де P приймає значення кожного ключа K, і йому відповідає значення цього ключа в об'єкті T.
  @condition {} extends { [P in K]: T[K] } - перевіряє, чи порожній об'єкт {} є підмножиною об'єкта,
  створеного у попередній частині для кожного ключа K.
  Якщо властивості з ключем K немає у об'єкті T, ця умова виконується і повертає true.
  @result ? never : K - Якщо ж умова не виконується (властивість з ключем K існує в об'єкті T),
  тип для цього ключа стає самим ключем K.
  @summary [keyof T] - ми отримуємо об'єднання типів,
  які були визначені для кожного ключа K у попередніх кроках,
  і вибираємо кінцевий тип ключа, що є обов'язковим для об'єкту T.
*/
type KeysWithRequiredProps<T> = {
  [K in keyof T]:{} extends { [P in K]:T[K] } ? never : K;
}[keyof T];
// тип, який визначає ключі з необов'язковими властивостями
type KeysWithOptionalProps<T> = {
  [K in keyof T]:{} extends { [P in K]:T[K] } ? K : never;
}[keyof T];

/**
  @type RequiredProps<T> - новий тип, що вибирає обов'язкові властивості з об'єкту T.
  @function KeysWithRequiredProps<T> - визначає ключі з обов'язковими властивостями.
  @template T extends object - об'єкт, для якого шукаємо обов'язкові властивості.
  @returns Об'єкт, який містить тільки ті властивості об'єкту T, що не можуть бути null або undefined.
*/
// тип, який визначає об'єкт з обов'язковими властивостями
type RequiredProps<T extends object> = Pick<T, KeysWithRequiredProps<T>>;
// інший варіант реалізації
type RequiredProps2<T extends object> = {
  [prop in keyof T]:{} extends Pick<T, prop> ? never : prop
}[keyof T];

// тип, який визначає об'єкт з необов'язковими властивостями
type OptionalProps<T extends object> = Pick<T, KeysWithOptionalProps<T>>;
// інший варіант реалізації
type OptionalProps2<T extends object> = {
  [prop in keyof T]:{} extends Pick<T, prop> ? prop : never
}[keyof T];

// використання утиліти для отримання типу Book з обов'язковими властивостями
type BookRequiredProps = RequiredProps2<Book>;
// використання утиліти для отримання типу Book з необов'язковими властивостями
type BookOptionalProps = OptionalProps2<Book>;

/**
  @type RemoveProps<T, TProps> - новий тип, який представляє об'єкт без вибраних властивостей.
  @template T - тип об'єкту, з якого видаляємо властивості.
  @template TProps - ключі, які видаляємо з об'єкту T.
  @template [prop in keyof T] - перебір всіх властивостей типу T;
  @condition as Exclude<prop, TProps> - властивості, які ми хочемо видалити
  @summary :T[prop] - значення залишених властивостей збігаються з оригінальними
*/
export type RemoveProps<T extends object, TProps extends keyof T> = {
  [prop in keyof T as Exclude<prop, TProps>]:T[prop];
};

type BookRequiredPropsType = RemoveProps<Book, BookOptionalProps>;
type BookOptionalPropsType = RemoveProps<Book, BookRequiredProps>;

/*
Цей аліас приймає тип T і повертає тип значення, 
яке отримується після розгортання промісу (якщо T є промісом). 
Якщо T не є промісом, то повертається той самий тип T.
*/
export type Unpromisify<T> = T extends Promise<infer U> ? U : T;
