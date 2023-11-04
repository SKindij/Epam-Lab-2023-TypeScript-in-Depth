// pets.ts
class Dog { 
  constructor(
    readonly name:string, 
    public age:number, 
    public geographicRegion:string
  ) { };
  sayHello(): string {
    return `I am Dog ${this.name} from ${this.geographicRegion}!`;
  }
}

class Fish { 
  constructor(
    readonly name:string, 
    public age:number, 
    public geographicRegion:string
  ) { };
  dive(howDeep:number): string { 
    return `Fish ${this.name} diving ${howDeep} feet in ${this.geographicRegion}.`;
  }
}

type Pet = Dog | Fish;

function talkToPet(pet:Pet): string|undefined {
  if (pet instanceof Dog) { 
    return pet.sayHello();
  } else if (pet instanceof Fish) {
    return 'Fish cannot talk, sorry.';
  }
}

const myDog = new Dog("Buddy", 3, "North America");
const myFish = new Fish("Nemo", 1, "Pacific Ocean");

console.log(talkToPet(myDog)); // => I am Dog Buddy from North America!
console.log(talkToPet(myFish)); // => Fish cannot talk, sorry.
// talkToPet({ name: 'John' });

console.log(myFish.dive(18)); // => Fish Nemo diving 18 feet in Pacific Ocean.
