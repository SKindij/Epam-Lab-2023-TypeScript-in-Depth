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








