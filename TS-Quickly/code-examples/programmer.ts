// programmer.ts
interface Comparator<T> {
  compareTo(value:T): number;    
}

class Programmer implements Comparator<Programmer> { 
  constructor(public name:string, private salary:number){};
  compareTo(value:Programmer): number { 
    return this.salary - value.salary;
  }
}

const prog1:Programmer = new Programmer("John", 24000); 
const prog2:Programmer = new Programmer("Alex", 32000);

prog1.compareTo(prog2) > 0 ? console.log(`${prog1.name} is richer`) : 
  prog1.compareTo(prog2) == 0 ? console.log(`${prog1.name} and ${prog1.name} earn the same amounts`) :
  console.log(`${prog1.name} is poorer`);


enum UserRole { 
  Administrator = 'admin', 
  Manager = 'manager',
  Programmer = 'dev'
}

interface User { 
  name:string; 
  role:UserRole;
}

function loadUserA<T>(): T {
  return JSON.parse('{ "name": "john", "role": "admin", "nic":"piggy" }');
}

const userA = loadUserA<User>();
console.log(userA);

switch (userA.role) {
  case UserRole.Administrator: console.log('Show control panel'); break; 
  case UserRole.Manager: console.log('Hide control panel'); break;   
}



