// src/bc101.ts
import * as crypto from 'crypto';
/*
  Цей клас оголошує властивості, необхідні для кожного блоку (на зразок індексу та хеш-значень поточного та попереднього блоків), 
  а також метод для обчислення їх хешів за допомогою криптомодуля Node.js. 
  У процесі ініціалізації об'єкта Block ми обчислюємо його хеш з урахуванням конкатенованих значень всіх його властивостей.
*/
class Block {
  readonly hash:string; // хеш цього блоку

  constructor (
    readonly index:number, // послідовний номер цього блоку
    readonly previousHash:string, // хеш попереднього блоку
    readonly timestamp:number, // час створення блоку
    readonly data:string // дані транзакцій програми
  ) {
    // обчислюємо хеш цього блоку під час його створення
      this.hash = this.calculateHash();
  }

  private calculateHash(): string {
    const data = this.index + this.previousHash + this.timestamp + this.data;
    return crypto
        // створюємо екземпляр об'єкта Hash для генерації SHA-256-хешів
            .createHash('sha256')
        // обчислюємо та оновлюємо хеш-значення всередині об'єкта Hash
            .update(data)
        // перетворюємо хеш-значення на шістнадцятковий рядок
            .digest('hex');
  }
};



class Blockchain {
  private readonly chain:Block[] = []; // масив для зберігання блоків

  private get latestBlock():Block {
    // геттер отримання посилання на останній доданий блок
    return this.chain[this.chain.length - 1];
  }

  constructor() {
    // створює початковий блок і додай його в ланцюжок
    this.chain.push(new Block(0, '0', Date.now(), 'Genesis block'));
  }

  addBlock(data:string): void {
    // створє новий блок та заповнює його властивості
    const block = new Block(
      this.latestBlock.index + 1,
      this.latestBlock.hash,
      Date.now(),
      data
    );
    // додаємо цей блок у масив
    this.chain.push(block);
  }
}

console.log('Creating the blockchain with the genesis block...');
  const blockchain = new Blockchain();

console.log('Mining block #1...');
  blockchain.addBlock('First block');

console.log('Mining block #2...');
  blockchain.addBlock('Second block');

// виводимо у консоль вміст блокчейну
console.log(JSON.stringify(blockchain, null, 2));
