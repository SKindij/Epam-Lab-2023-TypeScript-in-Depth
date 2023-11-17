// src/lib/decorators.ts

// декоратор для заморожування як самого конструктора, так і його прототипу
export function freeze(target:Function, param:string): void {
  // "target" - це сам конструктор класу (функція-конструктор),
  // "param" - рядок, який буде виведений у консоль для інформаційних цілей
  console.log(`Freezing the constructor ${param}`);
  // вже існуючі властивості конструктора не можна буде змінювати
  Object.freeze(target);
  // заморожує прототип об'єкта, який створює екземпляри класу
  Object.freeze(target.prototype);
};


































