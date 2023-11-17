// src/classes/university-librarian.ts
import * as Interfaces from '../interfaces';
import { freeze, logger, writable } from '../lib/decorators';

// @freeze('UniversityLibrarian')
@logger
class UniversityLibrarian implements Interfaces.Librarian {
  // даний клас реалізує визначений інтерфейс
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
  
  @writable(true)
  assistFaculty():void {
    console.log(this.name, 'Assisting faculty');
  }

  @writable(false)
  teachCommunity():void {
    console.log(this.name, 'Teaching community');
  }
}

export { UniversityLibrarian };
