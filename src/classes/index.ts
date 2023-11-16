// src/classes/index.ts
// у TS існують різні способи експорту модулів:

// отримання всіх іменованих експортів з файлу
export * from './reference-item';

// дозволяє перейменувати дефолтний експорт на призначене ім'я
export { default as RefBook } from './encyclopedia';

// всі іменовані експорти доступні через простір імен UL
export * as UL from './university-librarian';

// тут експортується все із файлу 
export * from './reader';

// тут експортується тільки конкретний тип 
export type { Library } from './library';

// дефолтний експорт з файлу 
export { default as Shelf } from './shelf';
