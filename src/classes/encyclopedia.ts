// src/classes/encyclopedia.ts
import { ReferenceItem } from './reference-item';

class Encyclopedia extends ReferenceItem {
  // додаткова публічна властивість
  edition:number;

  // конструктор для створення нового об'єкту
  constructor(
    id:number, 
	title:string, 
	year:number, 
	edition:number
  ) {
    // викликаємо конструктор батьківського класу
    super(id, title, year);
	// ініціалізуємо додаткову властивість
    this.edition = edition;
  }
}

export { Encyclopedia };
