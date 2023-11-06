# Practice Document

## Types Basics

### Завдання 02.01 Базові типи

1. Реалізуйте функцію **getAllBooks()**, яка повертає колекцію книжок. Об’явіть цю колекцію всередині функції.
    + ```javascript
        [
          { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true},
          { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false },
          { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true },
          { id: 4, title: 'Mastering JavaScript OOP', author: 'Andrea Chiarelli', available: true }
        ]
      ```
2. Реалізуйте функцію **logFirstAvailable()**, яка приймає масив книг як параметр і виводить у консоль:\
   _кількість книг у масиві та назву першої доступної книги_
    + Запустіть функцію ``logFirstAvailable()``
3. Об’явіть **enum Category** для зберігання наступних категорій книг: JavaScript, CSS, HTML, TypeScript, Angular.
    + Додайте категорію до об'єктів у функції getAllBooks().
4. Реалізуйте функцію **getBookTitlesByCategory()**, яка на вхід повинна отримувати категорію та повертати масив найменувань книг, що належать зазначеній категорії.
5. Реалізуйте функцію **logBookTitles()**, яка повинна приймати масив рядків та виводити його в консоль.
    + Викличте функції ``getBookTitlesByCategory()`` та ``logBookTitles()``.
6. Реалізуйте функцію **getBookAuthorByIndex()**, яка повинна приймати index книжки у масиві та повертати пару: назву книжки + автор.\
    + Використовуйте ``tuple`` для типу, що повертається. Викличте цю функцію.
    + Внесіть зміни до типу, що повертається функцією **getBookAuthorByIndex()** – додайте мітки: title, author для типу tuple.
7. Реалізуйте функцію **calcTotalPages()**, яка повинна підраховувати кількість сторінок книг у трьох бібліотеках міста, використовуючи такі дані:
    + ```javascript
        [
          { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 }, 
          { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
          { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
        ];     
      ```
    + Для підрахунків використовуйте тип bigint.
   
### Завдання 02.02 Приведення до константи

















