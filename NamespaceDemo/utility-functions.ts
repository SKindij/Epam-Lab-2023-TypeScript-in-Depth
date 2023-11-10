// NamespaceDemo/utility-functions.ts
/*
namespace в TS - це механізм, який дозволяє обгортати код у логічні групи
та надає можливість структурувати та організовувати код.
Простір імен визначає область видимості для імен, унікальних в межах цього простору.

*/
// оголошення простору імен Utility
namespace Utility {
  // оголошення простору імен Fees в межах Utility
  export namespace Fees {
    // функція обчислює плату за затримку на основі кількості днів
    export function calculateLateFee(daysLate:number) {
      return daysLate * 0.25;
    }
  }
  // визначає максимальну кількість книг в залежності від віку
  export function maxBooksAllowed(age:number):number {
    return age < 12 ? 3 : 10;
  }
  // приватна функція, яка не експортується за межі простору імен
  function privateFunc():void {
    console.log('This is private function');
  }
}

/*
Змінні, функції та об'єкти, оголошені в просторі імен, доступні тільки всередині нього.
Вони не забруднюють глобальний простір імен.
*/
