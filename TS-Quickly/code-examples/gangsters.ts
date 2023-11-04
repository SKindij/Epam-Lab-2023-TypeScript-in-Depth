// gangsters.ts
/*
 Якщо ви додасте ключове слово abstract до оголошення класу, 
 то він не зможе бути інстанційований.
 Ви можете захотіти делегувати реалізацію деяких методів його підкласів 
 і переконатися, що ці методи матимуть конкретні сигнатури
*/
abstract class Person {
    constructor(public name:string) { }; 

  changeAddress(newAddress:string ) {
    console.log(`Changing address to ${newAddress}`);
  }
  
  giveDayOff() {
    console.log(`Giving a day off to ${this.name}`);
  }

  abstract increasePay(percent:number): void;

  promote(percent:number) {
    this.giveDayOff();
    this.increasePay(percent);
  }
}

class Employee extends Person {
  increasePay(percent:number) {
    console.log(`Increasing the salary of ${this.name} by ${percent}%`);
  }
}

class Contractor extends Person {
  increasePay(percent:number) {
    console.log(`Increasing the hourly rate of ${this.name} by ${percent}%`);
  }
}

const workers:Person[] = [];

workers[0] = new Employee('John');
workers[1] = new Contractor('Mary');

workers.forEach(worker => worker.promote(5));

