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







