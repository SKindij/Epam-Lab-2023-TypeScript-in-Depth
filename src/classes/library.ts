// src/classes/library.ts
import { setInitial } from '../lib/decorators';

export class Library {
  @setInitial(81)
  id:number | undefined;
  
  name:string | undefined;
  address:string | undefined;
}
