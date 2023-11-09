// src/classes/reference-item.ts

class ReferenceItem {
  // визначаємо властивості класу
  title:string;
  year:number;
  // конструктор для створення об'єкту
  constructor(newTitle:string, newYear:number) {
    console.log('Creating a new ReferenceItem...');
    this.title = newTitle;
    this.year = newYear;
  }
  // виводимо інфо про об'єкт в консоль
  printItem(): void {
    console.log(`${this.title} was published in ${this.year}`);
  }
  
  
  
  
  
  
}

export { ReferenceItem };
