// motorVehicle.ts
// змоделюємо інтерфейс автомобіля за допомогою синтаксису TypeScript
interface MotorVehicle {
  // оголошуємо п'ять методів
    startEngine():boolean; 
    stopEngine():boolean; 
    brake():boolean; 
    accelerate(speed:number): void; 
    honk(howLong:number): void; 
}

// пишемо клас, який реалізовуватиме всі методи з інтерфейсу
class Car implements MotorVehicle {
  startEngine(): boolean { 
    return true;
  }
  stopEngine(): boolean{ 
    return true;
  }
  brake(): boolean { 
    return true;
  }
  accelerate(speed:number): void {
    console.log(`Driving faster`);
  }
  honk(howLong:number): void { 
    console.log(`Beep beep yeah!`);
  }
}

// спроектуємо інтерфейси для машини Джеймса Бонда
interface Flyable { 
  fly(howHigh:number); 
  land();
}
interface Swimmable { 
  swim(howFar:number);
}

// клас може реалізовувати декілька інтерфейсів
class BondCar extends Car implements Flyable, Swimmable {
  fly(howHigh: number) {
    console.log(`Flying at ${howHigh} feet`);
  }  
  land() {
    console.log(`Landing the BondCar`);
  }  
  swim(howFar: number) {
    console.log(`Swimming for ${howFar} miles`);
  }
}

const ordinaryCar = new Car();
const agentCar = new BondCar();










