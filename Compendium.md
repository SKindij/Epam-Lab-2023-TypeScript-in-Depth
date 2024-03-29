# Type Script Compendium

## TypeScript: Generics
Generics - це механізм, який дозволяє створювати компоненти (функції, класи, інтерфейси), які працюють з різними типами даних, зберігаючи при цьому типову безпеку. 
Використовуються для створення універсальних та повторно використовуваних компонентів.

### Загальні функції
Generics дозволяють створювати функції, які працюють з різними типами даних, зазначаючи тип як параметр.

```typescript
  // оголошення функції, яка приймає постачальника та його комплектуючі
  // <T> - це параметр типу, який може приймати будь-яке значення
  function orderComponents<T>(supplier: string, components: T[]): void {
    console.log(`Order placed with ${supplier}. Components: ${components.join(', ')}`);
  }

  // виклик функції для комплектуючих (різних типів даних)
  orderComponents<string>('SupplierA', ['CPU', 'GPU', 'RAM']);
  orderComponents<number>('SupplierB', [101, 129, 136]);
```

В контексті TypeScript параметри "in", "out" і "in out" визначають, як можна використовувати типи при визначенні функцій або методів, які оперують з параметрами.

+ **in**
  - вказує, що параметр може бути використаний тільки для вхідних значень, тобто для отримання даних в функцію.
  - Ви не можете змінювати це значення всередині функції.
  - Використовується, коли потрібно лише читати дані.
+ **out**
  - вказує, що параметр може бути використаний тільки для вихідних значень, тобто для повернення даних з функції.
  - Ви можете змінювати це значення всередині функції, але не можете читати його.
  - Використовується, коли потрібно лише змінювати дані.
+ **in out**
  - дозволяє як читати, так і змінювати значення параметра всередині функції.
  - Використовується, коли потрібно як читати, так і записувати дані.


#### Обмеження (Constraints):
Можна обмежити допустимі типи, які може приймати параметр типу. 

```typescript
  interface Electronic {
    brand: string;
    power: number;
  }

  function orderElectronics<T extends Electronic>(supplier: string, electronics: T[]): void {
    console.log(`Order placed with ${supplier}. Electronics: ${electronics.map(e => e.brand).join(', ')}`);
  }

  //  функція приймає лише ті типи, що реалізують інтерфейс Electronic
  orderElectronics('SupplierC', [{ brand: 'Samsung', power: 100 }, { brand: 'Sony', power: 120 }]);
```

#### Інференція типів (Type Inference):
TypeScript може автоматично визначати тип параметру типу, якщо відсутній явний вказівник типу.

```typescript
  function getFirstItem<T>(items: T[]): T {
    return items[0];
  }

  const firstComponent = getFirstItem(['CPU', 'GPU', 'RAM']); // тип firstComponent буде string
  const firstNumber = getFirstItem([143, 209, 137]); // тип firstNumber буде number
```

### Загальні інтерфейси
Використовуються для створення компонентів, які можуть працювати з різними типами даних, надаючи при цьому безпеку типів.

#### Оголошення загального інтерфейсу:
```typescript
  // дозволяють визначити об'єкт або функцію з параметром загального типу
  interface Pair<T> {
    first: T;
    second: T;
  }

  // використання загального інтерфейсу
  const numberPair: Pair<number> = { first: 1, second: 2 };
  const stringPair: Pair<string> = { first: 'one', second: 'two' };
```

#### Обмеження типів для загальних інтерфейсів
```typescript
  // можна використовувати для забезпечення певних властивостей для переданих типів
  interface Lengthy {
    // інтерфейс визначає, що об'єкт повинен містити властивість 
    length: number;
  }

  // аргумент типу T має бути об'єктом, який реалізує інтерфейс Lengthy
  function getLength<T extends Lengthy>(obj: T): number {
    // функція може визначено повертати довжину різних типів даних
    return obj.length;
  }

  // типи для цих змінних визначаються автоматично
  const arrayLength = getLength([1, 2, 3]); // Тип arrayLength буде number
  const stringLength = getLength('hello'); // Тип stringLength буде number
```

### Загальні класи

#### Оголошення загального класу:
```typescript
  // дозволяють створювати класи, які можуть працювати з будь-яким типом даних
  class Box<T> {
    private content: T;

    constructor(initialContent: T) {
      this.content = initialContent;
    }

    getContent(): T {
      return this.content;
    }
  }

  // використання загального класу
  const numberBox = new Box<number>(42);
  const stringBox = new Box<string>('TypeScript');

```

#### Методи загальних класів
```typescript
  // можуть використовувати загальні типи, визначені на рівні класу
  class Pair<T> {
    private first: T;
    private second: T;

    constructor(first: T, second: T) {
      this.first = first;
      this.second = second;
    }

    swap(): void {
      const temp = this.first;
      this.first = this.second;
      this.second = temp;
    }
  }

  // використання методу загального класу
  const stringPair = new Pair<string>('one', 'two');
  stringPair.swap(); // заміна місцями: 'two', 'one'
```

#### Загальні інтерфейси для класів:
можна використовувати для опису об'єктів, які мають методи з загальними типами

```typescript
  interface Printer<T> {
    print(value: T): void;
  }

  class ConsolePrinter<T> implements Printer<T> {
    print(value: T): void {
      console.log(value);
    }
  }

  // використання загального інтерфейсу для класу
  const stringPrinter: Printer<string> = new ConsolePrinter<string>();
  stringPrinter.print('Hello, Generics!'); // вивід: Hello, Generics!
```

### Загальні обмеження (Generics Constraints)
У TypeScript ви можете обмежити типи, які може приймати параметр типу (Type Parameter) у загальних функціях чи класах. 

```typescript
  // приклад: обмеження типу до об'єктів, які мають властивість name
  function logName<T extends { name: string }>(obj: T): void {
    console.log(obj.name);
  }

  const person = { name: 'John', age: 30 };
  const book = { title: 'The TypeScript Guide' };

  logName(person); // працює, оскільки об'єкт має властивість name
  logName(book);   // помилка, оскільки властивості name немає
```

**<T extends ...>** вказує, що параметр типу повинен бути підтипом (або реалізувати) об'єкта, який має вказані властивості

Розглянемо приклад із сфери виробництва електроніки.
```typescript
  // інтерфейс для електронного пристрою
  interface ElectronicDevice {
    powerOn(): void;
    powerOff(): void;
  }

  // функція для використання електронного пристрою
  function useElectronicDevice<T extends ElectronicDevice>(device: T): void {
    device.powerOn();
    device.powerOff();
  }

  // реалізація конкретного електронного пристрою - смартфон
  class Smartphone implements ElectronicDevice {
    powerOn(): void {
      console.log('Smartphone is powered on.');
    }

    powerOff(): void {
      console.log('Smartphone is powered off.');
    }

    makeCall(): void {
     console.log('Making a phone call.');
   }
  }

  // використання функції для смартфону
  const myPhone = new Smartphone();
  useElectronicDevice(myPhone); // працює, оскільки смартфон реалізує ElectronicDevice
```


### Утиліти (Mapped Types)
Wе набір готових інструментів, які допомагають працювати з типами більш ефективно. 
TypeScript надає кілька вбудованих утилітних типів, які полегшують роботу з типами даних. 


#### Partial< T >
робить всі властивості типу T (виду object) необов'язковими

```typescript
  interface Person {
    [id]: number,
    name: string;
    age: number;
    location: string
  };

  type PartialPerson = Partial<Person>;

  // тепер об'єкт partialPerson може містити будь-які властивості зі списку
  const partialPerson:PartialPerson = { name: 'John' };   
```

#### Required< T >
робить всі властивості типу T (виду object) обов'язковими


#### Readonly< T >
робить всі властивості типу T доступними тільки для читання

```typescript
  interface Config {
    server: string;
    port: number;
  }

  const readOnlyConfig: Readonly<Config> = { server: 'localhost', port: 8080 };
  // тепер властивості об'єкта readOnlyConfig не можна змінювати
```

#### Record<K, T>
створює об'єкт з ключами типу K та значеннями типу T

```typescript
  type Fruit = 'apple' | 'banana' | 'orange';
  const fruitPrices: Record<Fruit, number> = {
    apple: 25,
    banana: 48,
    orange: 73,
  };
  // тепер fruitPrices - об'єкт, де ключі - це Fruit, а значення - number
```

Іще один приклад:
```typescript
  type Props = "home"|"about"|"contacts"; // keys
  type PropType = { title:string, url:string }; // value of keys

  const pages: Record<Props, PropType> = {
    home: { title: 'Home Page', url: 'http://example.com/' },
    about: { title: 'About Page', url: 'http://example.com/about' },
    contacts: { title: 'Contacts Page', url: 'http://example.com/conyacts' }
  };
```

#### Pick<T, K>
обирає тільки вказані властивості типу T за їхніми ключами типу K

```typescript
  interface Car {
    brand: string;
    model: string;
    year: number;
  }

  const carInfo: Pick<Car, 'brand'|'model'> = {
    brand: 'Toyota',
    model: 'Camry',
  };
  // тепер carInfo - об'єкт з властивостями brand та model
```

#### Omit<T, K>
виключає вказані властивості типу T за їхніми ключами типу K

```typescript
  interface Computer {
    brand: string;
    processor: string;
    memory: number;
  }

  const computerSpecs: Omit<Computer, 'memory'> = {
    brand: 'Dell',
    processor: 'Intel',
  };
  // тепер computerSpecs - об'єкт без властивості memory
```

#### in keyof
Однак ви також можете створювати свої власні відображені типи за допомогою конструкції keyof та in. 

```typescript
  type Flags = {
    option1: boolean;
    option2: boolean;
    option3: boolean;
  };

  // перетворення всіх властивостей на тип string
  type StringFlags = {
    [K in keyof Flags]: string;
  };
  // тепер StringFlags має ті ж самі ключі, але всі значення - тип string
```

Ще один приклад, який робить усі властивості доступними для редагування.

```typescript
  type Writable<Type> = {
    -readonly [K in keyoff Type]: Type[K]
  }
```

### Умовні типи (Conditional Types)
+ дозволяють створювати типи, які залежать від умови
  * ``T extends U ? X : Y``

```typescript
  type TypeName<T> =
    T extends string ? 'string' :
    T extends number ? 'number' :
    T extends boolean ? 'boolean' :
    'unknown';
```

В умовних типах також можна використовувати **конструкцію infer**, яка дозволяє зберігати тип для подальшого використання:

```typescript
  // новий тип приймає T і перевіряє, чи воно є масивом
  type ExtractArrayType<T> = T extends (infer U)[] ? U : never;
  type ArrayItem = ExtractArrayType<string[]>;
    // тип ArrayItem буде => string
```

Це корисно, коли ми хочемо витягнути тип елементів масиву, але ми не знаємо наперед, що це буде. 
Умовні типи з infer надають можливість автоматично визначати та використовувати типи в процесі аналізу типів у TypeScript.


### Додаткові можливості

+ Exclude<Type, ExcludeUnion>
  - _виключає вказаний тип з об'єднання_
+ Extract<Type, Union>
  - _витягує вказаний тип з об'єднання_
+ NonNulable<Type>
  - _забирає undefined та null з об'єднання_

```typescript
  type T1 = Exclude<string|number|(() => void), Function>;
    // => string | number
  type T2 = Extract<string|number|(() => void), Function>;
    // => () => void
  type T3 = NonNulable<string|number|undefined|null>;
    // => string | number
```

#### Parameters<Type>
_застосовується до функціональних типів_

```typescript
  function createDescription(title:string, year:number) {
    // body
  };

  type ParamType = Parameters<type of createDescription>
    // повертає tuple => [string, number]
```

#### ConstructorParameters<Type>
_застосовується до класів_

```typescript
  class Book {
    constructor(public title:string, public author:string) { }
  }

  type ConstructorParams = ConstructorParameters<type of Book>;
  // повертає => [title:string, author:string]
```

#### ReturnType<Type>
_застосовується до функціональних типів_

```typescript
  function createDescription(title:string, year:number):string {
    // body
  };

  type createDescriptionType = ReturnType<type of createDescription>
    // тут повертає => string
```

### Утиліти літеральних рядкових типів

+ ``Uppercase<T>``
+ ``Lowercase<T>``
+ ``Capitalize<T>``
+ ``Uncapitalize<T>``

- - -

# Decorators
Декоратори - це експериментальна функціональність в TypeScript, яка надає зручний спосіб для огортання та модифікації класів та їх частин (методів, полів, аксесорів тощо). 
Вони використовуються як функції, які викликаються на етапі оголошення класу та його складових.

## Декоратор класу
+ Викликається один раз при оголошенні класу.
+ Використовується для зміни поведінки або структури класу.

### Можливі сингатури

1. ```typescript
     // коли хочемо внести певні зміни у конструктор
     (constructor: Function) => void
   ```
2. ```
     // коли хочемо замінити конструктор на новий
     <TFunction extends Function>(constructor: TFunction) => TFunction
   ```

### Class Decorator
```typescript
  /* оголошення декоратора класу
    тут  "T" має виглядати як клас з конструктором,
    який приймає будь-яку кількість аргументів і повертає об'єкт;
    як параметр функція приймає конструктор класу
  */
  function classDecorator<T extends { new (...args:any[]): {} }>(constructor:T) {
    // повертає новий клас, який розширює оригінальний клас
    return class extends constructor {
      // додає нове властиве поле класу
      newProperty = "new property";
      // перевизначає існуюче властиве поле класу
      hello = "override";
    };
  }

  // використання декоратора класу
  @classDecorator
  class Greeter {
    // звичайне поле класу
    property = "property";
    // поле, яке буде перевизначено декоратором
    hello:string;
    // конструктор класу
    constructor(m:string) {
      this.hello = m;
    }
  }

  // створення екземпляру класу Greeter
  console.log(new Greeter("world"));
  /* Output:
    {
      property: 'property', hello: 'override', newProperty: 'new property'
    }
  */
```

## Декоратор методу
- Викликається при оголошенні методу.
- Може використовуватися для перевизначення методів чи додавання логіки.


### Method Decorator
```typescript
  /* функція-декоратор методу отримує три параметри:
       target (прототип класу або конструктор),
       propertyKey (ім'я методу),
       descriptor (об'єкт, що містить властивості методу)
  */
  function methodDecorator(target:any, propertyKey:string, descriptor:PropertyDescriptor) {
    // вивід інформації про клас і метод, до якого застосовано декоратор
    console.log(`Method Decorator called on: ${target.constructor.name}`);
    console.log(`Method ${propertyKey} is decorated.`);
  }

  // клас з використанням декоратора методу
  class ExampleClass {
    // використання декоратора для методу
    @methodDecorator
    exampleMethod() {
      console.log('Inside the example method.');
    }
  }

  // створення екземпляра класу і виклик методу
  const exampleInstance = new ExampleClass();
  exampleInstance.exampleMethod();
  /* Output:
      Method Decorator called on: ExampleClass
      Method name: exampleMethod
      Inside the example method.
  */
```

## Декоратор поля
- викликається при оголошенні поля класу

### Field Decorator
```typescript
  function propertyDecorator(target:any, propertyKey:string) {
    console.log(`Property ${propertyKey} is decorated.`);
  }

  class Example {
    @propertyDecorator
    greeting: string = "Hello!";
  }

  const instance = new Example();
  console.log(instance.greeting); // Output: Hello!
```

## Декоратор автоаксесора
- Викликається при оголошенні автоаксесора (get/set).
- Можливість використовувати один декоратор для обох аксесорів (get/set).


### Accessor Decorator
```typescript
  // декоратор автоаксесора для геттера/сеттера
  function accessorDecorator(target:any, propertyKey:string, descriptor:PropertyDescriptor) {
    // вивід інформації про клас та властивість, до якої застосовано декоратор
    console.log(`Accessor Decorator called on: ${target.constructor.name}`);
    console.log(`Accessor (property) ${propertyKey} is decorated.`);
  }

  class ExampleClass {
    private _value:number = 0;

    // застосування декоратора до геттера та сеттера
    @accessorDecorator
    get value(): number {
      return this._value;
    }

    @accessorDecorator
    set value(newValue:number) {
      this._value = newValue;
    }    
  }

  // створення екземпляру класу та виклик геттера та сеттера
  const exampleInstance = new ExampleClass();
  exampleInstance.value = 42; // запуск сеттера
  console.log(exampleInstance.value); // запуск геттера
  /* Output:
      Accessor Decorator called on: ExampleClass
      Property name: value
      Accessor Decorator called on: ExampleClass
      Property name: value
      42
  */
```

- - -

# Asynchronous Patterns 

### Callback Function
Функція зворотнього виклику - це функція, яку ви передаєте іншій функції в якості аргументу і яка викликається після завершення певної операції чи події. Це один з базових механізмів роботи з асинхронним кодом в JavaScript та TypeScript.

```typescript
  /* тут 
      функція "callback" приймає один параметр "(data: any)"
      і "=> void" нічого не повертає
  */
  function fetchData(callback: (data:any) => void) {
    // імітація отримання даних через певний час
    setTimeout( () => {
      const data = { message: "Hello, world!" };
      callback(data);
    }, 1000);
  }

  // використання функції зворотнього виклику
  fetchData( (result) => {
    console.log(result.message); // виведе: Hello, world!
  });
```

#### Дженерик Інтерфейс Колбеку
```typescript
  interface Callback<T> {
    (err: Error|null, data: T|null): void;
  }
```

### Promises
Проміс - це об'єкт, який представляє результат асинхронної операції. Він може бути в стані "виконано" (resolved) з результатом чи в стані "відхилено" (rejected) з помилкою. Проміси роблять код асинхронних операцій більш зручним для розуміння та управління.

```typescript
  // функція повертає об'єкт "Promise", який може дати дані будь-якого типу
  function fetchData(): Promise<any> {
    return new Promise((resolve, reject) => {
      // імітація отримання даних через певний час
      setTimeout(() => {
        const data = { message: "Hello, world!" };
        resolve(data);
        // або reject(new Error("Помилка отримання даних"));
      }, 1000);
    });
  }

  // використання промісів
  fetchData()
    .then((result) => {
      console.log(result.message); // Виведе: Hello, world!
    })
    .catch((error) => {
      console.error(error.message); // Виведе: Помилка отримання даних
    });

```

#### Конструктив створеня промісу
```typescript
  let p = new Promise<string|void>(resolve, reject) => {
    // виконуємо асинхронну операцію
    // ...
    // в рзі успіху та наявності даних
    if (success && data) {
      resolve(data); // string type
    // операація успішнаа і немає дних
    } else if (success) {
      resolve(); // void type
    // в рзі невдачі
    } else {
      reject('Error, something bad happened. Try again later.');
    }
  });
```

### Async Functions
Асинхронні функції - це синтаксичний цукор навколо промісів, який полегшує написання асинхронного коду. Вони використовують ключове слово async та оператор await для обробки промісів.

```typescript
  async function fetchData(): Promise<any> {
    return new Promise((resolve) => {
      // імітація отримання даних через певний час
      setTimeout(() => {
        const data = { message: "Hello, world!" };
        resolve(data);
      }, 1000);
    });
  }

  // використання асинхронної функції
  async function fetchDataAndLog() {
    try {
      const result = await fetchData();
      console.log(result.message); // виведе: Hello, world!
    } catch (error) {
      console.error(error.message);
    }
  }

  fetchDataAndLog();
```

#### Синтаксис асинхронної функції
```typescript
  async function doAsyncWork() {
    let results = await getDataFromServer(); // => promise
    console.log(results);
  }

```
