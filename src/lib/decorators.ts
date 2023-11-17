// src/lib/decorators.ts

// декоратор для заморожування як самого конструктора, так і його прототипу
export function freeze(param:string) {
   // "param" - рядок виведення у консоль для інформаційних цілей
  return function <T extends { new (...args:any[]):{} }>(constructor:T): void {   
    console.log(`Freezing the constructor ${param}`);
    // вже існуючі властивості конструктора не можна буде змінювати
    Object.freeze(constructor);
    // заморожує прототип об'єкта, який створює екземпляри класу
    Object.freeze(constructor.prototype);
  };
};


export function logger<TFunction extends new (...args:any[]) => any>(
  originalClass:TFunction
):TFunction {
  // створює нову функцію-конструктор
  const newConstructor:Function = function(...args:any[]) {
    console.log('Creating new instance');
    console.log(originalClass.name);
	// викликає оригінальний конструктор та передає йому всі аргументи
	const instance = new originalClass(...args);
    Object.assign(this, instance);
    this.age = 30;
  };
  // встановлює прототип нового конструктора таким же, як у вихідному конструкторі
  // дозволяє новому конструктору успадковувати методи та властивості вихідного конструктора
  newConstructor.prototype = Object.create(originalClass.prototype);
  // Object.setPrototypeOf(newConstructor.prototype, constructor.prototype);
  // додає новий метод до прототипу нового конструктора
  newConstructor.prototype.printLibrarian = function ():void {
    console.log(`Librarian name: ${this.name}, Librarian age: ${this.age}`);
  };
  // повертає новий конструктор
  return newConstructor as TFunction;
}
/* 
  "extends new (...args:any[]) => any" - вказує, що TFunction повинен бути конструктором, 
  тобто функцією, яку можна викликати за допомогою new, 
  і вона повинна приймати будь-яку кількість аргументів;
  
  "function(...args: any[]) { ... }" - визначаємо тіло функції-конструктора, 
  яке буде викликане при створенні нового екземпляра класу;
*/

// фабрика (генератор декоратора), яка отримує булевий параметр 
export function writable(isWritable:boolean) {
  // внутрішня функція, яка є самим декоратором методу
  return function (
    target:any, methodName:string, descriptor:PropertyDescriptor
  ):PropertyDescriptor {
    console.log(target, methodName, descriptor);
    descriptor.writable = isWritable;
	return descriptor;
  };
}
/*
  target - екземпляр класу, що містить метод, який декорується;
  methodName - ім'я методу, який декорується;
  descriptor - об'єкт, що містить властивість value, яка є функцією, що визначає метод;
*/

// декоратор, який додає затримку виклику методу
export function timeout(ms:number) {
  // повертає функцію, яка буде викликана для обробки методу
  return function (
    target:any, methodName:string, descriptor:PropertyDescriptor
  ):PropertyDescriptor {
    // зберігає оригінальний метод для подальшого виклику
    const originalMethod = descriptor.value;
    // перезаписує значення дескриптора (оригінальний метод)
    descriptor.value = function (...args: any[]) {
      // перевіряє, чи користувач підтверджує свою дію
      if (window.confirm('Are you sure?')) {
	    // встановлює затримку та...
        setTimeout(() => {
		  // ...викликає оригінальний метод з переданими аргументами
          originalMethod.apply(this, args);
        }, ms);
      }

    };
      // змінений дескриптор для встановлення нового методу
      return descriptor;
    };
}

// декоратор, що встановлює значення ініціалізації поля:
export function setInitial(inputValue:any) {
  return function (target:any, propertyKey:string) {
    target[propertyKey] = inputValue;
  };
}



































