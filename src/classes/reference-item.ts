// src/classes/reference-item.ts

/*
  Абстрактний клас не можна інстанціювати напряму, 
  але можна створити похідні класи, які реалізують абстрактні методи.
*/
abstract class ReferenceItem {
  // статична властивість з доступом через ім'я класу
  static department:string = 'Default Department';
  // приватна (“soft private”) властивість
  private _publisher:string = '';
  // приватна (“hard private”) властивість
  private readonly id:number;

  // конструктор для створення нового об'єкту
  constructor(
    id:number,
    public title:string, 
	protected year:number,
  ) {
    console.log('Creating a new ReferenceItem...');
    this.id = id;
  }
  
  // гетер повернення значення властивості у верхньому регістрі
  get publisher(): string {
    return this._publisher.toUpperCase();
  }
  // сеттер для встановлення значення властивості
  set publisher(newPublisher:string) {
    this._publisher = newPublisher;
  }
  // метод, що надає доступ до приватної властивості
  getID(): number {
    return this.id;
  }
 
  // виводимо інфо про об'єкт в консоль
  printItem(): void {
    console.log(`${this.title} was published in ${this.year}`);
	console.log(`Department: ${ReferenceItem.department}`);
  }
  // абстрактний метод, який не приймає параметрів і не повертає значення
  abstract printCitation(): void;
   
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
