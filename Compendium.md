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

робить всі властивості типу T необов'язковими

```typescript
  interface Person {
    name: string;
    age: number;
  }

  const partialPerson: Partial<Person> = { name: 'John' };
  // тепер об'єкт partialPerson може містити тільки властивість name або age або обидві
```

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
    apple: 1,
    banana: 2,
    orange: 3,
  };
  // тепер fruitPrices - об'єкт, де ключі - це Fruit, а значення - number
```

#### Pick<T, K>

обирає тільки вказані властивості типу T за їхніми ключами типу K

```typescript
  interface Car {
    brand: string;
    model: string;
    year: number;
  }

  const carInfo: Pick<Car, 'brand' | 'model'> = {
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

#### Умовні типи (Conditional Types)

дозволяють створювати типи, які залежать від умови

```typescript
  type TypeName<T> =
    T extends string ? 'string' :
    T extends number ? 'number' :
    T extends boolean ? 'boolean' :
    'unknown';
```

В умовних типах також можна використовувати конструкцію infer, яка дозволяє зберігати тип для подальшого використання:

```typescript
  // новий тип приймає T і перевіряє, чи воно є масивом
  type ExtractArrayType<T> = T extends (infer U)[] ? U : never;
  type ArrayItem = ExtractArrayType<string[]>; // тип ArrayItem буде string
```

Це корисно, коли ми хочемо витягнути тип елементів масиву, але ми не знаємо наперед, що це буде. 
Умовні типи з infer надають можливість автоматично визначати та використовувати типи в процесі аналізу типів у TypeScript.


# Decorators

Декоратори - це експериментальна функціональність в TypeScript, яка надає зручний спосіб для огортання та модифікації класів та їх частин (методів, полів, аксесорів тощо). 
Вони використовуються як функції, які викликаються на етапі оголошення класу та його складових.

### Декоратор класу

+ Викликається один раз при оголошенні класу.
+ Використовується для зміни поведінки або структури класу.

```typescript
  // оголошення декоратора класу
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









```typescript

```




```typescript

```





```typescript

```











