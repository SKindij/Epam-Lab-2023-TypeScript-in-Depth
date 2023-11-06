// src/lib/websocket-controllers.ts
// типи блоків та транзакцій з іншого модуля
import { Block, Transaction } from './blockchain-node';
// функція для генерації UUID
import { uuid } from './cryptography';
// типи повідомлень
import { Message, MessageTypes, UUID } from './messages';

// ля власних Promise, щоб слідкувати за їхнім виконанням або відхиленням
interface PromiseExecutor<T> {
  resolve: (value?:T|PromiseLike<T>) => void;
  reject: (reason?:any) => void;
}

// керує веб-сокетами та обміном повідомленнями
export class WebsocketController {
  private websocket!:Promise<WebSocket>;
  private messagesCallback!: (messages:Message) => void;
  private readonly messagesAwaitingReply = new Map<UUID, PromiseExecutor<Message>>();

  // генерує URL для підключення до веб-сокет сервера
  private get url(): string {
    const protocol = window.location.protocol === 'https:' ? 'wss' : 'ws';
    const hostname = process.env.REACT_APP_WS_PROXY_HOSTNAME || window.location.host;
    return `${protocol}://${hostname}`;
  }

  // метод підключення до веб-сокет сервера
  connect(messagesCallback: (messages: Message) => void): Promise<WebSocket> {
    this.messagesCallback = messagesCallback;
    return this.websocket = new Promise((resolve, reject) => {
      const ws = new WebSocket(this.url);
      ws.addEventListener('open', () => resolve(ws));
      ws.addEventListener('error', err => reject(err));
      ws.addEventListener('message', this.onMessageReceived);
    });
  }

  // метод відключення від веб-сокет сервера 
  disconnect() {
    this.websocket.then(ws => ws.close());
  }

  // обробник прийняття повідомлення
  private readonly onMessageReceived = (event: MessageEvent) => {
    const message = JSON.parse(event.data) as Message;

    if (this.messagesAwaitingReply.has(message.correlationId)) {
      this.messagesAwaitingReply.get(message.correlationId)!.resolve(message);
      this.messagesAwaitingReply.delete(message.correlationId);
    } else {
      this.messagesCallback(message);
    }
  }

  // метод для відправки повідомлення через веб-сокет
  async send(message: Partial<Message>, awaitForReply: boolean = false): Promise<Message> {
    return new Promise<Message>(async (resolve, reject) => {
      if (awaitForReply) {
        this.messagesAwaitingReply.set(message.correlationId!, { resolve, reject });
      }
      this.websocket.then(
        ws => ws.send(JSON.stringify(message)),
        () => this.messagesAwaitingReply.delete(message.correlationId!)
      );
    });
  }

  // метод запиту найдовшого ланцюга блоків
  async requestLongestChain(): Promise<Block[]> {
    const reply = await this.send({
      type: MessageTypes.GetLongestChainRequest,
      correlationId: uuid()
    }, true);
    return reply.payload;
  }

  // метод для відправки запиту на новий блок з транзакціями
  requestNewBlock(transactions: Transaction[]): void {
    this.send({
      type: MessageTypes.NewBlockRequest,
      correlationId: uuid(),
      payload: transactions
    });
  }

  // метод для анонсу нового блоку
  announceNewBlock(block: Block): void {
    this.send({
      type: MessageTypes.NewBlockAnnouncement,
      correlationId: uuid(),
      payload: block
    });
  }
}