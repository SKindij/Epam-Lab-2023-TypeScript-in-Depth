// src/lib/blockchain-node.ts
import { sha256 } from './cryptography';

const HASH_REQUIREMENT = '0000';

// оголошуємо інтерфейси для операцій з транзакціями та блоками
export interface Transaction {
  readonly sender:string;
  readonly recipient:string;
  readonly amount:number;
}

export interface Block {
  readonly hash:string;
  readonly nonce:number;
  readonly previousHash:string;
  readonly timestamp:number;
  readonly transactions:Transaction[];
}

// визначаємо типи для операцій над блоками і вилученням хешу
export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
export type WithoutHash<T> = Omit<T, 'hash'>;
export type NotMinedBlock = Omit<Block, 'hash' | 'nonce'>;

// містить логіку обробки блоків та транзакцій
export class BlockchainNode {
  private _chain:Block[] = [];
  private _pendingTransactions:Transaction[] = [];
  private _isMining = false;

  // ініціалізує ланцюг із вже існуючих блоків
  initializeWith(blocks:Block[]): void {
    this._chain = [...blocks ];
  }

  // ініціалізує ланцюг блоків з генезис-блоку
  async initializeWithGenesisBlock(): Promise<void> {
    const genesisBlock = await this.mineBlock({ previousHash: '0', timestamp: Date.now(), transactions: [] });
    this._chain.push(genesisBlock);
  }

  // видобуває новий блок (майнінг)
  async mineBlock(block:NotMinedBlock): Promise<Block> {
    this._isMining = true;
    let hash = '';
    let nonce = 0;

    do {
      hash = await this.calculateHash({ ...block, nonce: ++nonce })
    } while (!hash.startsWith(HASH_REQUIREMENT));

    this._isMining = false;
    this._pendingTransactions = [];
    return { ...block, hash, nonce };
  }

  // видобуває новий блок з вказаними транзакціями
  async mineBlockWith(transactions:Transaction[]): Promise<Block> {
    const block = { previousHash: this.latestBlock.hash, timestamp: Date.now(), transactions };
    return this.mineBlock(block);
  }

  // методи доступу до даних
  get isMining(): boolean {
    return this._isMining;
  }

  get chain(): Block[] {
    return [ ...this._chain ];
  }

  get chainIsEmpty(): boolean {
    return this._chain.length === 0;
  }

  get latestBlock(): Block {
    return this._chain[this._chain.length - 1];
  }

  get pendingTransactions(): Transaction[] {
    return [ ...this._pendingTransactions ];
  }

  get hasPendingTransactions(): boolean {
    return this.pendingTransactions.length > 0;
  }

  get noPendingTransactions(): boolean {
    return this.pendingTransactions.length === 0;
  }

  // додавання транзакцій до очікуючих транзакцій
  addTransaction(transaction: Transaction): void {
    this._pendingTransactions.push(transaction);
  }

  /*
   Attempts to add a block into the blockchain. 
   The rejected promise carries the reason why the block wasn't added.
  */
  async addBlock(newBlock: Block): Promise<void> {
    const errorMessagePrefix = `⚠️ Block "${newBlock.hash.substr(0, 8)}" is rejected`;

    // Знаходить індекс блока, за яким потрібно додати новий блок.
    const previousBlockIndex = this._chain.findIndex(b => b.hash === newBlock.previousHash);
    if (previousBlockIndex < 0) {
      throw new Error(`${errorMessagePrefix} - there is no block in the chain with the specified previous hash "${newBlock.previousHash.substr(0, 8)}".`);
    }

    // Перевірка довжини ланцюга, щоб врахувати більш довгий ланцюг
    const tail = this._chain.slice(previousBlockIndex + 1);
    if (tail.length >= 1) {
      throw new Error(`${errorMessagePrefix} - the longer tail of the current node takes precedence over the new block.`);
    }

    // перевірка хешу нового блоку відносно хешу попереднього блоку.
    const newBlockHash = await this.calculateHash(newBlock);
    const prevBlockHash = this._chain[previousBlockIndex].hash;
    const newBlockValid = (
      newBlockHash.startsWith(HASH_REQUIREMENT) &&
      newBlock.previousHash === prevBlockHash &&
      newBlock.hash === newBlockHash
    );
    if (!newBlockValid) {
      throw new Error(`${errorMessagePrefix} - hash verification has failed.`);
    }

    // додаємо новий блок до кінця ланцюга.
    this._chain = [ ...this._chain, newBlock ];
  }

  // обчислення хешу для блоку без хешу
  private async calculateHash(block:WithoutHash<Block>): Promise<string> {
    const data = block.previousHash + block.timestamp + JSON.stringify(block.transactions) + block.nonce;
    return sha256(data);
  }
}

// функція для додавання затримки
export function randomDelay(maxMilliseconds: number = 100): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), Math.floor(Math.random() * Math.floor(maxMilliseconds)));
  });
}
