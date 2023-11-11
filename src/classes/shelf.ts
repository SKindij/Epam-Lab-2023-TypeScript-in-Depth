// path: src/classes/shelf.ts
import { ShelfItem } from '../interfaces';

export default class Shelf<T extends ShelfItem> {
  private items:T[];

  constructor() {
    // ініціалізуємо поле items пустим масивом при створенні об'єкта
    this.items = [];
  }
  // додаємо нову книжку на поличку
  add(item:T):void {
    this.items.push(item);
  }
  // отримуємо першу найближчу книжку
  getFirst():T {
    return this.items[0];
  }
  // повертає першу знайдену книжку
  find(title:string):T {
    return this.items.find((item:T) => item.title === title);
  }
  // виводить назви книжок, що є на поличці
  printTitles():void {
    this.items.forEach(item => console.log(item.title));
  }
};
