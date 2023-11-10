// src/classes/university-librarian.ts
import * as Interfaces from '../interfaces';

// даний клас реалізує визначений інтерфейс
class UniversityLibrarian implements Interfaces.Librarian {
  name:string;
  email:string;
  department:string;

  constructor(
    name:string,
    email:string,
    department:string
  ) {
    this.name = name;
    this.email = email;
    this.department = department;
  }

  assistCustomer(custName:string, bookTitle:string):void {
    console.log(`${this.name} is assisting ${custName} with the book ${bookTitle}`);
  }
}

export { UniversityLibrarian };
