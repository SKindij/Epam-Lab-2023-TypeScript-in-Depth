// src/classes/reference-item.ts

class ReferenceItem {
  // приватна (“soft private”) властивість
  private _publisher:string = '';

  // конструктор для створення об'єкту
  constructor(public title:string, private year:number) {
    console.log('Creating a new ReferenceItem...'); 
  }
  
  // гетер повернення значення властивості у верхньому регістрі
  get publisher(): string {
    return this._publisher.toUpperCase();
  }
  // сеттер для встановлення значення властивості
  set publisher(newPublisher:string) {
    this._publisher = newPublisher;
  }
  
  
  // виводимо інфо про об'єкт в консоль
  printItem(): void {
    console.log(`${this.title} was published in ${this.year}`);
  }
   
}

export { ReferenceItem };

/*
В TypeScript "soft private" властивість означає, що властивість позначена 
як приватна (за допомогою _ перед іменем), але це лише конвенція.
На практиці, це не справжній механізм заборони доступу. 
Змінні з префіксом _ є доступними ззовні класу, і це питання дисципліни програміста 
дотримуватися конвенції та не звертатися безпосередньо до таких змінних.

Введена у TypeScript 3.8, "hard private" властивість забороняє зовнішній доступ до властивостей 
навіть після компіляції коду до JavaScript.
Властивості, позначені ключовим словом private без префіксу _, є "hard private". 
Зовнішній код не зможе отримати доступ до цих властивостей.
*/
