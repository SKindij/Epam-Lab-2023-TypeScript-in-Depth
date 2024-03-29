# TypeScript Quickly

> _This repository contains code samples from the book "TypeScript Quickly" by Yakov Fain and Anton Moiseev._

### Базові команди в консолі

+ вивід глобально встановлених пакетів: ``npm list -g``
+ глобальна установка: ``npm install -g typescript``
+ перевірка версії: ``tsc -v``
+ компіляція main.ts в main.js: ``tsc main``
  - ``tsc main --noEmitOnError true`` >> _файл не буде генеруватися із помилками_
  - ``tsc --t ES5 main`` >> компілюємо в певний синтаксис


### Нотатки (поради)

Слід уникати явних анотацій типів там, де компілятор TypeScript зможе вивести їх сам.

Додавайте явні анотації типів для сигнатур функцій чи методів, а також членів публічних класів.

Якщо потрібно оголосити змінну, яка може містити значення декількох типів, не використовуйте тип `any`; використовуйте об'єднання типів `let padding:string|number`.


## ВИЗНАЧЕННЯ КОРИСТУВАЦЬКИХ ТИПІВ

Користувальницький тип може бути оголошений за допомогою ключових слів:
1. `type`
   + коли вам потрібно створити аліас (псевдонім) для існуючого типу даних;
   + коли хочете зробити код більш читабельним і уникнути дублювання типів;
3. `class`
   + коли хочете створити екземпляр класу з методами та властивостями;
   + для створення об'єктів з конструкторами і можливістю успадкування;
5. `interface`
   + коли вам потрібно описати структуру об'єкта або класу;
   + найкраще підходять для опису класів публічного API , моделей даних та інтерфейсів зовнішніх бібліотек;
   + також підходять для реалізації узгодженості між класами і об'єктами;

```typescript
  type Point = { x:number; y:number };
  type Callback = (result:string) => void;

  class Rectangle {
    constructor(public width:number, public height:number) {}
    getArea() {
      return this.width * this.height;
    }
  }

  const myRect = new Rectangle(5, 10);
  console.log(myRect.getArea());

  interface User {
    name:string;
    age:number;
  }

  class Customer implements User {
    constructor(public name:string, public age:number) {}
  }
```

Якщо ви хочете оголосити деякі опціональні властивості, то повинні додати `?` до їхніх імен.

Рівень доступу `public` означає, що до відповідних згенерованих властивостей Класу може звернутися будь-який код, розташований як усередині, так і поза класом.

Коли ви оголошуєте властивості класу, можете також відзначити їх як `readonly`.

### Робота із Класами

- _класи можуть оголошувати конструктори, які викликаються один раз при інстанціюванні_
- _компілятор TypeScript перетворює класи на функції-конструктори JavaScript, якщо цільовим синтаксисом зазначено ES5_
- _Якщо ж вказано версію ES6 або пізнішу, то класи TypeScript будуть перекомпільовані в JavaScript-класи_

> Всередині JavaScript підтримує об'єктне успадкування через прототипи, коли один об'єкт може бути присвоєний іншому як його прототип.

#### Модифікатори доступу

> _використовуються для керування видимістю властивостей та методів класів_

1. `public`:
    - робить властивості та методи доступними для всіх, включаючи зовнішній код і підкласи;
    - це значення за замовчуванням, і ви можете його не вказувати явно;
2. `protected`:
    - дозволяє доступ до властивостей та методів класу з підкласів;
    - ви не можете звертатися до них зовнішнім кодом;
3. `private`:
    - робить властивості та методи недоступними навіть для підкласів;
    - вони можуть бути використані лише в межах самого класу;
    - використовується для обмеження доступу та підвищення безпеки.


Інтерфейс може оголошувати як властивості, так і методи (проте без реалізацій). Потім оголошення класу може містити ключове слово `implements`, що супроводжується іменем інтерфейсу. Іншими словами, в той час як інтерфейс містить лише сигнатури методів, клас може містити їх реалізації.

> інтерфейс забезпечує виконання певного контракту

#### "Програмуйте через інтерфейси, а не через реалізації"

Основна ідея полягає в тому, що ви маєте створювати абстракції через інтерфейси, які описують очікувану поведінку, і працювати з цими інтерфейсами, незалежно від конкретної реалізації.

### Перерахування та узагальнені типи

Узагальнення — це частина коду, здатна обробляти значення кількох типів, які вказуються під час використання цього коду (під час виклику функції чи інстанціювання класу).

## Декоратори

+ Використовуючи декоратори, можна додавати метадані в клас, функцію, властивість або параметр.
+ Декоратори дозволяють змінювати оголошення типу, а також поведінку класу, методу, властивості або параметра. Навіть якщо ви не будете писати свої декоратори важливо розуміти їх застосування, якщо один з фреймворків їх використовує.
+ Ви можете створювати тип на основі іншого типу.
+ Відображені типи дозволяють вам створювати додатки, що мають обмежену кількість основних типів, але безліч похідних, створених на їх основі.
+ Умовні типи дозволяють вам відкласти ухвалення рішення про те, який тип використовувати; рішення приймається під час виконання, залежно від заданої умови.
+ Ці можливості мови непрості для розуміння, але вони показують її міць.













