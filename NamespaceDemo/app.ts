// NamespaceDemo/app.ts
// директива посилання - застаріла методика додавання вмісту
/// <reference path="utility-functions.ts" />

// створюємо аліас
import util = Utility.Fees;

// використовуємо функції з простору імен
const daysLate = 5;
const lateFee = util.calculateLateFee(daysLate);
console.log(`Плата за затримку: $${lateFee}`);

const age = 20;
const maxAllowed = Utility.maxBooksAllowed(age);
console.log(`Максимальна кількість книг для віку ${age}: ${maxAllowed}`);